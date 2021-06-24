class Player {
    constructor(){
this.index = null;
this.name = null;
//this.distance=0;
this.xPos =0;
this.yPos = 0;
this.flag =1;
    }
    getPlayerCount(){
      var getPlayerCountRef = database.ref('playerCount');
      getPlayerCountRef.on("value",(data)=>{
          playerCount = data.val();
      })
    }

    updateCount(data){
        database.ref('/').update({
            playerCount:data
        })
    }

    updatePlayerName(){
       var playerIndex = "players/player"+this.index;
       database.ref(playerIndex).set({
          name:this.name ,
         // distance:this.distance,
          'xPos':this.xPos,
          'yPos':this.yPos,
           flag:this.flag
       })
    }
    static getPlayerInfo(){
        var playerInfo = database.ref('players');
        playerInfo.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
    
    
    
}