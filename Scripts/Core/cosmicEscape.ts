
(function () {
  let canvas:HTMLElement;
  let stage:createjs.Stage;


function Start(){

    let canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", Update);
    
    cosmicEscape();
}
function Update (){
stage.update();
}

function cosmicEscape(){
    console.log("fucl");

}


}());