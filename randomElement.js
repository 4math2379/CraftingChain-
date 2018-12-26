//put random element code for CRAKING events


//resources stats
var ColdResistance = Math.floor((Math.random() * 5) + 1);
var Conductivity = Math.floor((Math.random() * 5) + 1);
var DecayResistance = Math.floor((Math.random() * 5) + 1);
var EntangleResistance = Math.floor((Math.random() * 5) + 1);
var Flavor = Math.floor((Math.random() * 5) + 1);
var HeatResistance = Math.floor((Math.random() * 5) + 1);
var Malleability = Math.floor((Math.random() * 5) + 1);
var OverallQuality = Math.floor((Math.random() * 5) + 1);
var PotentialEnergy = Math.floor((Math.random() * 5) + 1);
var ShockResistance = Math.floor((Math.random() * 5) + 1);
var UnitToughness = Math.floor((Math.random() * 5) + 1);



function resourcesStats() {
    CR = ColdResistance + Math.floor((Math.random() * 1000)+ 1);
    conduc = Conductivity + Math.floor((Math.random() * 1000)+ 1);
    decay = + Math.floor((Math.random() * 1000)+ 1);
    entangle = + Math.floor((Math.random() * 1000)+ 1);
    flav = + Math.floor((Math.random() * 1000)+ 1);
    HR = + Math.floor((Math.random() * 1000)+ 1);
    mallea = + Math.floor((Math.random() * 1000)+ 1);
    OQ = + Math.floor((Math.random() * 1000)+ 1);
    Penergy = + Math.floor((Math.random() * 1000)+ 1);
    SR = + Math.floor((Math.random() * 1000)+ 1);
    thought = + Math.floor((Math.random() * 1000)+ 1);
}   
resourcesStats();

var adamantium = [CR + 50, conduc + 50, decay + 50, entangle + 30, flav + 20,
                    HR + 30, mallea + 50, OQ + 50, Penergy + 30, SR + 30,
                    thought + 50];


var bronze = [CR + 20, conduc + 20, decay + 10, entangle + 10, flav + 3,
    HR + 3, mallea + 20, OQ + 10, Penergy + 3, SR + 3,
    thought + 50];


var silver = [CR + 10, conduc + 30, decay + 10, entangle + 10, flav + 3,
    HR + 20, mallea + 30, OQ + 20, Penergy + 3, SR + 3,
    thought + 40];    



//finish other ressources.
//when player decide not to sell his ressources 'chunk' he harvest he can "Crack" it , more the ressource got better stats
//more the ressource can be rare.




 function crackEvent() {
     var pickedRessources = Math.floor((Math.random()* 3) + 1);
     console.log(pickedRessources);

     if (pickedRessources == 1) {
         console.log("you craked Adamantium , stats is " + adamantium )
         
     } else if (pickedRessources == 2) {
        console.log("you craked |Silver , stats is " + silver )

     } else {
        console.log("you craked Bronze , stats is " + bronze)
     }
    
     function silverCraked() {
    
        var section = document.getElementById("silver");
         if (pickedRessources == 1) {
             section = document.write('| Adamantium picked ! ')
         } else if (pickedRessources == 2) {
             section = document.write('|Silver picked ! ')
         } else {
             section = document.write(' | Bronze Picked ! ')
         }
     }
     silverCraked();


 }
 crackEvent();



 


