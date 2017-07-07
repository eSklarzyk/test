/**
 * @author Tom Tsiliopoulos ttsliop@my.centennialcollege.ca
 * @studentID 300818577
 * @date July 4, 2016
 * @version 0.01 - Initial version of the button class
 */
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
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/**
 * This is the generic objects namespace
 *
 * @module objects
 */
var objects;
(function (objects) {
    /**
     * This simple Button class extends the createjs.Bitmap object.
     * It includes two private methods to handle mouseover and mouseout events.
     *
     * @export
     * @class Button
     * @extends {createjs.Bitmap}
     */
    var Button = (function (_super) {
        __extends(Button, _super);
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Button.
         *
         * @constructor
         * @param {string} pathString
         * @param {number} x
         * @param {number} y
         * @param {boolean} isCentered
         */
        function Button(imageString, x, y, isCentered) {
            var _this = _super.call(this, core.textureAtlas, imageString) || this;
            // Check if user wants to change regX and regY values to the center 
            if (isCentered) {
                _this.regX = _this.getBounds().width * 0.5;
                _this.regY = _this.getBounds().height * 0.5;
            }
            _this.x = x;
            _this.y = y;
            // binds the mouseover and mouseout events to the button object
            _this.on("mouseover", _this._mouseOver, _this);
            _this.on("mouseout", _this._mouseOut, _this);
            return _this;
        }
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This is an event handler for the mouseover event
         *
         * @private
         * @method _mouseOver
         * @param {createjs.MouseEvent} event
         */
        Button.prototype._mouseOver = function (event) {
            this.alpha = 0.7;
        };
        /**
         * This is an event handler for the mouseout event
         *
         * @private
         * @method _mouseOut
         * @param {createjs.MouseEvent} event
         */
        Button.prototype._mouseOut = function (event) {
            this.alpha = 1.0;
        };
        return Button;
    }(createjs.Sprite));
    objects.Button = Button;
})(objects || (objects = {}));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//# sourceMappingURL=button.js.map