$(document).ready(function(){

  var limit = 10;
  var offset = 0;

  var searchButton = $("#search-button");
  var results = $("#results");

  searchButton.on("click", search);
  $("body").on("click", "#load-next", search);

  function search(e){
    e.preventDefault();
    if (e.target === searchButton[0]){
      results.empty();
      offset = 0;
    } else {
      $(e.target).remove();
    }

    var searchData = $(".search-data");
    var searchCriteria = getSearchCriteria(searchData);

    url = "http://xkcd-unofficial-api.herokuapp.com/xkcd" + searchCriteria;

    var jqXHR = $.ajax({
      url: url,
      data: {
        api_key: "foobar",
        limit: limit,
        offset: offset
      }
    });

    jqXHR.done(function(response){
      console.log(response);
      render(response, results);
    })
      
  }

  function getSearchCriteria(searchData){
    var searchCriteria = "?";
    for (i=0; i< searchData.length; i++) {
      searchType = $(searchData[i]).attr('id');
      searchValue = $(searchData[i]).val();

      if (searchValue) {
        searchCriteria += searchType + "=" + searchValue + "&";
      }
    }
    return searchCriteria;
  }

  function render(response, results){
    $.each(response, function(index, comic){
      var name = $("<h1 class='title'>" + comic.title + "</h1>");
      var artwork = $("<img class='artwork' src='" + comic.img + "'>");
      results.append(name);
      results.append(artwork);
    })
    var loadNext = $("<button id='load-next'>Load More</button>");
    results.append(loadNext);
    offset += limit;
  }
})