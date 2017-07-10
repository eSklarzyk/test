module objects {
    /**
     * This is the Player object used in the game
     * 
     * @export
     * @class Player
     * @extends {objects.GameObject}
     */
    export class Player extends objects.GameObject {
       
        constructor(imageString:string) {
            super(imageString)

            this.start();
        }

       
        private _checkBounds():void {
            // checkbounds to stop player from going outside

            // check right bounds
            if(this.x >= (640 - (this.width * 0.5))) {
                this.x = (640 - (this.width * 0.5));
            }

            // check left bounds
            if(this.x <= (0 + (this.width * 0.5))) {
                this.x = (0 + (this.width * 0.5));
            }
        }

       
        public update():void {
            // player to follow mouse
            //this.position = new Vector2(this.x, this.y);
            this.x = core.stage.mouseX;
            this._checkBounds();
        }
    }
}