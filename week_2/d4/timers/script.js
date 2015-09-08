

function moveLogo (){
  var logo = $(".logo");
  var left = parseInt(logo.css("left"));
  var maxWidth = $(window).width();
  left >= maxWidth ? left = 0 : left += 1;
  logo.css("left", left);
}

// function bounceLogo(){
//   var logo = $(".logo");
//   var left = parseInt(logo.css("left"));
//   var maxWidth = $(window).width();
//   var interval = 30;

//    left >= maxWidth || left <= 0) ?
//      interval *= -1 : interval;

//    left + interval

     

//   logo.css("left", left);
// }

var moveLogo = setInterval(moveLogo, 10);
console.log(moveLogo);
