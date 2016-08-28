//META{"name":"changingBackground"}*//

var changingBackground = function () {};
var intBg = "";

changingBackground.prototype.startChanging = function () {
  var settings = this.loadSettings();
  var images = settings.images;
  var nmbr = 0;
  intBg = setInterval(function(){
     document.documentElement.style.setProperty('--background-image', 'url("'+images[nmbr]+'")');
     nmbr = nmbr+1;
     if(nmbr == images.length){
       nmbr = 0;
     }
   }, settings.cd);
};

//settings
changingBackground.prototype.settingsVersion = 1;

changingBackground.prototype.defaultSettings = function() {
  return{
    version: this.settingsVersion,
    cd: 30000,
    startImage: 1,
    images: new Array(
      "https://cdn.rawgit.com/Zerthox/ClearVision/master/images/amber.jpg",
      "https://cdn.rawgit.com/Zerthox/ClearVision/master/images/amethyst.jpg",
      "https://cdn.rawgit.com/Zerthox/ClearVision/master/images/emerald.jpg",
      "https://cdn.rawgit.com/Zerthox/ClearVision/master/images/ruby.jpg",
      "https://cdn.rawgit.com/Zerthox/ClearVision/master/images/sapphire.jpg"
      )
  }
}
changingBackground.prototype.loadSettings = function() {
  var settings = (localStorage.changingBackground) ? JSON.parse(localStorage.changingBackground) : {version:"0"};
	if(settings.version != this.settingsVersion){
		settings = this.defaultSettings();
		localStorage.changingBackground = JSON.stringify(settings);
	}
	return settings;
};
changingBackground.prototype.saveSettings = function(button) {

  var settings = this.loadSettings();
  settings.cd = $("#cbsettings #intervals").val();
  settings.startImage = $("#cbsettings #startimg").val();
  settings.images = new Array();
  $("ol li").each(function(index) {
    var input = $(this).find("input");
    if(input.val() != ""){
      settings.images[index] = input.val();
    }
  });
  localStorage.changingBackground = JSON.stringify(settings);
  this.stop();
	this.start();
	button.innerHTML = "Saved";
	setTimeout(function(){button.innerHTML = "Save";},1000);
};

changingBackground.prototype.resetSettings = function(button) {
  var settings = this.defaultSettings();
  localStorage.changingBackground = JSON.stringify(settings);
  this.stop();
  this.start();
  button.innerHTML = "Resetted";
  setTimeout(function(){button.innerHTML = "Reset";},1000);
};

changingBackground.prototype.start = function () {
  var settings = this.loadSettings();
  document.documentElement.style.setProperty('--background-image', 'url("'+settings.images[settings.startImage-1]+'")');
  this.startChanging();
};
changingBackground.prototype.load = function () {
  var settings = this.loadSettings();
};

changingBackground.prototype.addInput = function() {
  $("#cbsettings #add").attr("onClick","");
  $("#cbsettings #add").attr("id","");
  $("#cbsettings ol").append("<li><input id='add' type='text' onclick='changingBackground.prototype.addInput()'></li>");
};

changingBackground.prototype.getSettingsPanel = function () {
  var settings = this.loadSettings();
  var html = "<div id='cbsettings'><h2>Settings</h2>"
  html += "Intervals:<br>"
  html += "<input id='intervals' type='number' value="+(settings.cd)+"> milliseconds<br><br>";
  html += "Images:<br>"
  html += "<ol style='list-style-type: decimal; padding-left: 25px;'>"
  for(var k in settings.images){
    html += "<li><input type='text' value='"+settings.images[k]+"'></li>"
  }
  html +="<li><input id='add' type='text' onclick='changingBackground.prototype.addInput()'></li>";
  html += "</ol><br>";
  html+= "Start Image:<br>";
  html += "<input id='startimg' type='number' value="+(settings.startImage)+"><br><br>";
  html +="<button id ='save' onclick='changingBackground.prototype.saveSettings(this)'>Save</button> ";
  html +="<button id ='reset' onclick='changingBackground.prototype.resetSettings(this)'>Reset</button> <br><br>";
  html += "</div>"
  return html;
};

changingBackground.prototype.getName = function () {
  return "Background Changer Plugin";
};

changingBackground.prototype.getDescription = function () {
  return "Changes the Background Image from Themes";
};

changingBackground.prototype.getVersion = function () {
  return "1.0";
};

changingBackground.prototype.getAuthor = function () {
  return "Finicalmist";
};

changingBackground.prototype.remove = function () {
  clearInterval(intBg);
};

changingBackground.prototype.stop = function () {
  this.remove();
};
changingBackground.prototype.unload = function () {
  this.remove();
}
