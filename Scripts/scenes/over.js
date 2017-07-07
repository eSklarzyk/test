var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Over = (function (_super) {
        __extends(Over, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function Over() {
            return _super.call(this) || this;
        }
        /**
         *
         */
        Over.prototype.Start = function () {
            // Add Ocean Background
            this._backgr = new objects.Backgr("background");
            this.addChild(this._backgr);
            // Add Menu Label
            this._gameOverLabel = new objects.Label("GAME OVER", "60px", "Dock51", "#FFFF00", 320, 180, true);
            this.addChild(this._gameOverLabel);
            /*
            // Add Score Label
            this._finalScoreLabel = new objects.Label(
                "SCORE: " + core.score, "60px", "Dock51", "#FFFF00",
                320, 240, true
            )
            this.addChild(this._finalScoreLabel);
*/
            // add the start button
            this._restartButton = new objects.Button("restartButton", 320, 420, true);
            this.addChild(this._restartButton);
            // Start button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        Over.prototype.Update = function () {
            // scene updates happen here...
            this._backgr.update();
        };
        // EVENT HANDLERS ++++++++++++++++
        Over.prototype._restartButtonClick = function (event) {
            // Switch the scene
            //  core.lives = 5;
            // core.score = 0;
            core.scene = config.Scene.PLAY;
            core.changeScene();
        };
        return Over;
    }(objects.Scene));
    scenes.Over = Over;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map