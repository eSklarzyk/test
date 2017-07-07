
(function (window) {
   
 var canvas:HTMLElement;
  var stage:createjs.Stage;


function Start() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", Update);
   cosmicEscape();
}

function Update(event:createjs.Event):void{
stage.update();
}

function cosmicEscape() {
alert("kkd");
}


}(window));