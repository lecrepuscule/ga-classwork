$(document).ready(function(){
  $("#new-doughnut").on("submit", addDoughnut);
  $("body").on("click", ".delete", deleteDoughnut);
  getDoughnuts();
})

  var endpoint = "http://api.doughnuts.ga/doughnuts";

  function getDoughnuts(){
    $.ajax({
      url: endpoint
    })
    .done(function(response){
      $.each(response, function(index, doughnut){
        appendDoughnut(doughnut);
      })
    })
  }

  function appendDoughnut(doughnut){
    $("#doughnuts").append("<li>"+doughnut.flavor+" <em> " + doughnut.style + "</em><a class='delete' href='#' data-id=" + doughnut.id + ">delete</a></li>");
  }

  function addDoughnut(e){
    e.preventDefault();

    var doughnut = {
      flavor: $("#doughnut-flavour").val(),
      style: $("#doughnut-style").val()
    }
    $.post(endpoint, doughnut)
    .done(function(response){
      appendDoughnut(response);
      $("#doughnut-flavour").val("");
    })
  }

  function deleteDoughnut(e){
    var element = $(this);
    $.ajax({
      url: endpoint + "/" + element.data("id"),
      method: "delete"
    })
    .done(function(response){
      element.parent().remove();
    })
    .fail(function(err){
      console.log("error");
      console.log(err);
    })
  }

