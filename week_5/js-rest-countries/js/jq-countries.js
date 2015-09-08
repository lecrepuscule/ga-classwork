$(document).ready(function(){

  var getRegionsButton = $("#get-regions");
  var regionSelect = $("#region-select");
  var countrySelect = $("#country-select");
  var results = $("#results");

  getRegionsButton.on("click", getRegions);
  regionSelect.on("change", getCountries);
  countrySelect.on("change", getCountryData);

  function getRegions(e){
    $.get("https://restcountries.eu/rest/v1/all", function(response){
      console.log(response);
      regionSelect.empty();
      var regions = [];

      $.each(response, function(index, item){
        if ($.inArray(item.region, regions) === -1 && item.region) {
          regions.push(item.region);
          regionSelect.append("<option value='" + item.region + "'>" + item.region + "</option>");
        }
      })
      regionSelect.prepend("<option value='default'>-- Select your region --</option>");
    });
  }

  function getCountries(e){
    var regionName = $(this).val();
    $.get("https://restcountries.eu/rest/v1/region/"+regionName, function(response){
      countrySelect.empty();

      $.each(response, function(index, country){
        countrySelect.append("<option value='" + country.name + "'>" + country.name + "</option>");
      })
      countrySelect.prepend("<option value='default'>-- Select your country --</option>");
    })
  }

  function getCountryData(e){
    var countryName = $(this).val();
    $.get("https://restcountries.eu/rest/v1/name/"+countryName, function(response){
      var country = response[0];
      var countryTemplate = "<h2>" +  country.name + "</h2>";
      countryTemplate += "<h3>" + country.capital + "</h3>";
      countryTemplate += "<img src='http://www.geonames.org/flags/x/" + country.alpha2Code.toLowerCase() + ".gif'>";
      $("#results").html(countryTemplate);
    })
  }
});

