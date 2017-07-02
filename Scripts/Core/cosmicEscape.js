(function () {
    var canvas;
    var stage;
    function Start() {
        var canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        cosmicEscape();
        Update();
    }
    function Update() {
        stage.update();
    }
    function cosmicEscape() {
        Update();
    }
    window.onload = Start;
}());
//# sourceMappingURL=cosmicEscape.js.map