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
var objects;
(function (objects) {
    /**
     * This is the Ocean object used in the game
     *
     * @export
     * @class Ocean
     * @extends {createjs.Bitmap}
     */
    var Backgr = (function (_super) {
        __extends(Backgr, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Ocean.
         *
         * @constructor
         * @param {string} imageString
         */
        function Backgr(imageString) {
            var _this = _super.call(this, core.assets.getResult(imageString)) || this;
            _this.start();
            return _this;
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Resets the object outside of the viewport
         *
         * @private
         * @method _reset
         * @returns {void}
         */
        Backgr.prototype._reset = function () {
            this.y = -960;
        };
        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        Backgr.prototype._checkBounds = function () {
            if (this.y >= 0) {
                this._reset();
            }
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method is used to initialize public properties
         * and private instance variables
         *
         * @public
         * @method start
         * @returns {void}
         */
        Backgr.prototype.start = function () {
            this._reset();
            this._dy = 5; // 5px per frame down
        };
        /**
         * This method updates the object's properties
         * every time it's called
         *
         * @public
         * @method update
         * @returns {void}
         */
        Backgr.prototype.update = function () {
            this.y += this._dy;
            this._checkBounds();
        };
        return Backgr;
    }(createjs.Bitmap));
    objects.Backgr = Backgr;
})(objects || (objects = {}));
//# sourceMappingURL=backgr.js.map