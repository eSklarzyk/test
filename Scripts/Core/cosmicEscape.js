(function () {
    var canvas;
    var stage;
    function Start() {
        var canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        cosmicEscape();
    }
    function Update() {
        stage.update();
    }
    function cosmicEscape() {
        console.log("fucl");
    }
}());
//# sourceMappingURL=cosmicEscape.js.map