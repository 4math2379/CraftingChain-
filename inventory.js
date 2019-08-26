//RETRIEVE USER , PLAYER SPECS
//let stuff = require('./stuff')

//1 build object inventory values and specs
var inventorySlot = [];
let maxInventorySlot = inventorySlot.length + 10;
let addItem   = inventorySlot + 1

//list of randomResource
//ressources 




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





  if (adamantium.OQ < 100) {
      console.log('QO is over' + OQ)

  }


//inventory of each
function UserInventory() {
    harvesterInventory = maxInventorySlot + 5;
    crafterInventory = maxInventorySlot + 3;

    
}
UserInventory();

//item function to pick up item
let randomResource = [adamantium, bronze,silver]
var item = randomResource[Math.floor(Math.random()*randomResource.length)];
console.log(item)

function itemPicked() {

    if (item == adamantium) {
        console.log('adamantium added in inventory')
    } else if (item == bronze) {
        console.log('bronze added in inventory')
    } else if (item == silver) {
        console.log('silver added to the inventory')

    } else {
        console.log('nothing added')
    }
    
}

itemPicked()


function addItemInventory() {
    if (inventorySlot = [2]) {

        console.log('inventory add 1')
        
        
    }else {
        console.log('no add');
    }
}

addItemInventory()






//2 back-end request
//3 build the ui
//create object model using PHP or React.
//4 how to drop ,disapear and appear in inventory
//5 object of the inventory
//6 finalize deal , sell , transaction , crafting and give session




//outputs 

console.log(maxInventorySlot);
console.log("harvester inventory slot is " + harvesterInventory );



