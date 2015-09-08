var getRegionsButton;
var regionSelect;
var countrySelect;

function ajaxRequest(method, url){
  var request = new XMLHttpRequest();
  request.open(method, url);
  request.send();
  return request;
}

function successfulRequst(request){
  return request.readyState === 4 && request.statusText === "OK";
}

function getRegions(e){
  var regions = [];

  var request = ajaxRequest("GET", "https://restcountries.eu/rest/v1/all");

  request.onreadystatechange = function(){
    if(successfulRequst(request)) {
      regionSelect.innerHTML = "";

      var response = JSON.parse(request.response);
      for(var i=0; i< response.length; i++){
        if (regions.indexOf(response[i].region) === -1 && response[i].region) {
          regions.push(response[i].region);
          var optionRegion = document.createElement("option");
          optionRegion.setAttribute("value", response[i].region);
          optionRegion.innerHTML = response[i].region;
          regionSelect.appendChild(optionRegion);
        } 
      }
      var optionDefault = document.createElement("option");
      optionDefault.setAttribute("value", "default");
      optionDefault.innerHTML = "-- Plase select a region --";
      regionSelect.insertBefore(optionDefault, regionSelect.firstChild);
    }
  }
}

function getCountries(e){
  var countries = [];
  var region = this.value;
  var url = "https://restcountries.eu/rest/v1/region/" + region;
  var request = ajaxRequest("GET", url);

  request.onreadystatechange = function(){
    if(successfulRequst(request)){
      countrySelect.innerHTML="";

      var response = JSON.parse(request.response);

      for(var i=0; i< response.length; i++){
        if (countries.indexOf(response[i].name) === -1 && response[i].name) {
          countries.push(response[i].name);
          var optionCountry = document.createElement("option");
          optionCountry.setAttribute("value", response[i].name);
          optionCountry.innerHTML = response[i].name;
          countrySelect.appendChild(optionCountry);
        } 
      }
      var optionDefault = document.createElement("option");
      optionDefault.setAttribute("value", "default");
      optionDefault.innerHTML = "-- Plase select a country --";
      countrySelect.insertBefore(optionDefault, countrySelect.firstChild);
    }
  }
}

function getCountryInfo(e) {
  var country = this.value;
  var url = "https://restcountries.eu/rest/v1/name/" + country;
  var request = ajaxRequest("GET", url);

  request.onreadystatechange = function(){
    if(successfulRequst(request)){
      var response = JSON.parse(request.response)[0];
      var countryTemplate = "<h2>" + response.name + "</h2>";
      countryTemplate += "<h3>" + response.capital + "</h3>";
      results.innerHTML = countryTemplate;

    }
  }
}

document.addEventListener("DOMContentLoaded", function(){
  getRegionsButton = document.getElementById("get-regions");
  getRegionsButton.addEventListener("click", getRegions);
  regionSelect = document.getElementById("region-select");
  countrySelect = document.getElementById("country-select");
  results = document.getElementById("results");
  regionSelect.addEventListener("change", getCountries);
  countrySelect.addEventListener("change", getCountryInfo);
})


