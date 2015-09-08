var myPlayer = myPlayer || {};

myPlayer.setup = function() {
  this.playButton = document.getElementById("playbutton");
  this.playButton.setAttribute("data-state", "stopped");
  this.playButton.addEventListener("click", myPlayer.playClickHandler.bind(this))
}

myPlayer.playClickHandler = function(e) {
  e.preventDefault();
  console.log(this);
  if(this.playButton.getAttribute("data-state") === "playing") {
    this.pause();
  } else {
    this.play();
  }
}

// {onfinish: this.clearSound.bind(this)}

myPlayer.play = function(){
  var sound = this.getSound();
  this.playButton.innerHTML = "&#10074;&#10074;"

  if (this.playButton.getAttribute("data-state") ==="stopped") {
    this.currentSound.play();
  } else if (this.playButton.getAttribute("data-state") === "paused") {
    this.currentSound.resume()
  } else {
    console.warn("myPlayer is in an unexpected state: " + this.playButton.getAttribute("data-state"));
  }
  this.playButton.setAttribute("data-state", "playing");
}

myPlayer.pause = function() {
  this.currentSound.pause();
  this.playButton.innerHTML = "&#9654";
  this.playButton.setAttribute("data-state", "paused");
}

myPlayer.getSound = function(){
  if(!this.currentSound){
    this.currentSound = soundManager.createSound({
    id: "test",
    url: "http://www.hazmatt.net/gaming/starcraft/terran/units/marine/tmardy00.wav"
    })
  }
  return this.currentSound;
}

myPlayer.currentSound = null;



soundManager.setup({
  url: '../swf/',
  flashVersion: 9, // optional: shiny features (default = 8)
  // optional: ignore Flash where possible, use 100% HTML5 mode
  // preferFlash: false,
  onready: function() {
    myPlayer.setup().bind(myPlayer);
  }
})