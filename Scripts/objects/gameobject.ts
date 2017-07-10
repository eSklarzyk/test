module objects {
 
    export abstract class GameObject extends createjs.Sprite {
       
      //Private Instance Variables 
        private _width:number;
        private _height:number;
        private _name:string;

//Public Properties

        get width():number {
            return this._width;
        }

        set width(newWidth:number) {
            this._width = newWidth;
        }

        get halfWidth():number {
            return this._width * 0.5;
        }

        get height():number {
            return this._height;
        }

        set height(newHeight:number) {
            this._height = newHeight;
        }

        get halfHeight():number{
            return this._height * 0.5;
        }

        get name():string {
            return this._name;
        }

        set name(newName:string) {
            this._name = newName;
        }

//CONSTRUCTORS
 constructor(imageString:string) {
            super(core.textureAtlas, imageString)
            
            this._initialize(imageString);

            this.start();
        }

         private _initialize(imageString:string):void {
            this.name = imageString;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
           
        }
           public start():void {
            
        }
public update():void {
           
        }
    }

}