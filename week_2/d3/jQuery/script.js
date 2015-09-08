var myApp = myApp || {};


myApp.count = 0;
myApp.colours = ["red", "orange", "green", "blue", "purple", "pink"];

myApp.disco = function(e){
  var listItems = $("li");
  for (var i=0; i < myApp.colours.length; i++){
    var index = (myApp.count + i) % myApp.colours.length;
    var listItem = listItems[i];
    $(listItem).css("background-color", myApp.colours[index]);
  }
  myApp.count++;
}

myApp.initialize = function(){
  $("button#disco-button").on("click", myApp.disco);
}

$(document).ready(function(){
  myApp.initialize();
})

