"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var bitMan = (function (_super) {
    __extends(bitMan, _super);
    function bitMan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = {
            images: ["./Assets/Sprites/TexturePackerV.png"],
            frames: [
                [1, 1, 151, 118, 0, 0, 0],
                [154, 1, 99, 75, 0, 0, 0],
                [1, 121, 136, 111, 0, 0, 0],
                [154, 78, 99, 75, 0, 0, 0],
                [1, 234, 91, 91, 0, 0, 0],
                [139, 155, 90, 77, 0, 0, 0],
                [94, 234, 90, 77, 0, 0, 0],
                [94, 313, 98, 50, 0, 0, 0],
                [186, 234, 56, 54, 0, 0, 0],
                [1, 327, 44, 42, 0, 0, 0],
                [194, 290, 56, 54, 0, 0, 0],
                [231, 155, 9, 33, 0, 0, 0],
                [47, 327, 9, 33, 0, 0, 0]
            ],
            animations: {
                "shield": { frames: [0] },
                "player": { frames: [1] },
                "meteorBig": { frames: [2] },
                "playerDamaged": { frames: [3] },
                "enemyUFO": { frames: [4] },
                "playerLeft": { frames: [5] },
                "playerRight": { frames: [6] },
                "enemyShip": { frames: [7] },
                "laserGreenShot": { frames: [8] },
                "meteorSmall": { frames: [9] },
                "laserRedShot": { frames: [10] },
                "laserGreen": { frames: [11] },
                "laserRed": { frames: [12] },
                constructor: function (name) { this.data = name; }
            }
        };
        return _this;
    }
    return bitMan;
}(createjs.SpriteSheet));
exports.bitMan = bitMan;
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = new createjs.SpriteSheet(name);
        return _this;
    }
    return Player;
}(bitMan));
exports.Player = Player;
//# sourceMappingURL=bitManifest.js.map