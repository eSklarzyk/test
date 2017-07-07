(function (window) {


  let canvas:HTMLElement;
  let stage:createjs.Stage;
  let game = (<any>window).game;
  var window : Window;

  createjs.EventDispatcher.initialize(GameMenu);
var p = GameMenu.prototype;
  
function GameMenu(){
    this.initialize();
}

p.addButton = null;
p.count = 0;

p.initialize = function (){
this.Container_initialize();
this.addBG();
this.addButton();
}

p.addBG = function(){
  return console.log("fuck");
}



p.addButton = function(){
 var btn, event;
      btn = new createjs.Graphics.Circle(.05,.05,3);
      btn.on('click',this.playGame,this);
      btn.setButtonListeners({color:'#FFF', borderColor:'#FFF', 
      overColor:'#900'});
      this.addChild(btn);
   }


 p.playGame = function (e) {
      this.dispatchEvent(game.GameStateEvents.GAME);
   }
 
game.GameMenu = GameMenu;
}(window));

