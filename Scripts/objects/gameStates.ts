

module object {

 (function () {

(<any>window).game = (<any>window).game || {};

interface game {
GameStates:any ={
MAIN_MENU : 0,
RUN_SCENE: 1,
GAME:10,
GAME_OVER:20
}

GameStateEvents:any = {
    MAIN_MENU:  'main-menu-event',
    GAME_OVER: 'game-over-event',
    GAME: 'game-event' 
   }
}

} () ) ; 



