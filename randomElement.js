//put random element code for CRAKING events


//when player decide not to sell his ressources 'chunk' he harvest he can "Crack" it , more the ressource got better stats
//more the ressource can be rare.




 function crackEvent() {
     var pickedRessources = Math.floor((Math.random()* 3) + 1);
     console.log(pickedRessources);

     if (pickedRessources == 1) {
         console.log("you craked Adamantium , stats is " )
         
     } else if (pickedRessources == 2) {
        console.log("you craked Silver , stats is " )

     } else {
        console.log("you craked Bronze , stats is "  )
     }
    

 }
 crackEvent();


