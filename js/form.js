class Form {
    constructor(){
      this.button = createButton('Play');
      this.input = createInput("").attribute("PlaceHolder","Name"); 
      this.title = createElement('h1');
      this.greeting = createElement('h1');
      this.reset = createButton('Reset') ;
    }
    hide(){
        this.input.hide();
        this.button.hide(); 
        this.greeting.hide();
    }
    
    display(){
background(255)
        this.title.html("Ant Marathon's");
        this.title.position(displayWidth/2-50,displayHeight/2-400);

        this.input.position(displayWidth/2-20,displayHeight/2+40);

        this.button.position(displayWidth/2-20,displayHeight/2+70);

        this.reset.position(70,10);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            //playerCount = playerCount+1;
            playerCount+=1;
            

            player.name = this.input.value();
            player.index= playerCount;
            player.updateCount(playerCount);
            player.updatePlayerName();

            this.greeting.html("Hello "+player.name);
            this.greeting.position(displayWidth/2,displayHeight-200);
        })

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.updateGameState(0);
            var playerInfoRef = database.ref('players')
            playerInfoRef.remove();
            location.reload();
        })


    }
}