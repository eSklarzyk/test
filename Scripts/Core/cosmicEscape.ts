
(function(window){


  let canvas:HTMLElement;
  let stage:createjs.Stage;
  let game = (<any>window).game;
  var window : Window;

//Interface
interface GameStates {
MAIN_MENU : 0,
RUN_SCENE: 1,
GAME:10,
GAME_OVER:20
}
var GameStates : GameStates;

interface GameStateEvents {
    MAIN_MENU: 'main-menu-event',
    GAME_OVER: 'game-over-event',
    GAME: 'game-event'
}
var GameStateEvents: GameStateEvents;

createjs.EventDispatcher.initialize(CosmicEscape);

  function CosmicEscape() {

    console.log("we made it");
 this.initialize();
  }
 
 
 var p = CosmicEscape.prototype; //class 
 
 p.initialize = function () {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", this.onTick,this);
    this.changeState((<any>window).game.GameStates.MAIN_MENU);
 } 

 p.changeState = function (state) {
this.currentGameState = state;
switch(this.currentGameState){
        case game.GameStates.MAIN_MENU:
            this.currentGameStateFunction = this.gameStateMainMenu;
            break;
         case game.GameStates.GAME:
            this.currentGameStateFunction = this.gameStateGame;
            break;
         case game.GameStates.RUN_SCENE:
            this.currentGameStateFunction = this.gameStateRunScene;
            break;
         case game.GameStates.GAME_OVER:
            this.currentGameStateFunction = this.gameStateGameOver;
            break;
} }

 p.onStateEvent = function (e, data) {
      this.changeState(data.state);
 }

p.gameStateMainMenu = function () {
   var scene = new game.GameMenu();
   scene.on(game.GameStateEvents.GAME, this.onStateEvent, this,
      false, {state:game.GameStates.GAME});
   stage.addChild(scene);
   stage.removeChild(this.currentScene);
   this.currentScene = scene;
   this.changeState(game.GameStates.RUN_SCENE);
}
p.gameStateGame = function () {
   var scene = new game.Game();
   scene.on(game.GameStateEvents.GAME_OVER, this.onStateEvent, this,
      false, {state:game.GameStates.GAME_OVER});
   stage.addChild(scene);
   stage.removeChild(this.currentScene);
   this.currentScene = scene;
   this.changeState(game.GameStates.RUN_SCENE);
}
p.gameStateGameOver = function () {
   var scene = new game.GameOver();
   stage.addChild(scene);
   scene.on(game.GameStateEvents.MAIN_MENU, this.onStateEvent, this,
      false, {state:game.GameStates.MAIN_MENU});
   scene.on(game.GameStateEvents.GAME, this.onStateEvent, this,
      false, {state:game.GameStates.GAME});
   stage.removeChild(this.currentScene);
   this.currentScene = scene;
   this.changeState(game.GameStates.RUN_SCENE);
}
p.gameStateRunScene = function (tickEvent) {
   if (this.currentScene.run) {
      this.currentScene.run(tickEvent);
} }
p.onTick = function (e) {
   if (this.currentGameStateFunction != null) {
      this.currentGameStateFunction(e);
   }
   stage.update();
}

game.CosmicEscape = CosmicEscape;

} (window));

