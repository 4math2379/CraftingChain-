














//weapons stats 

var damages = 5;
var durability = 0;


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
















//character skill and profession 

var craftAbilities = 1;
var inteligence = 10;






function excalibur() {
    magicalMissile = damages + Math.floor((Math.random()* 500)) + 1;
    compose = adamantium;
    life = durability + 500;

    
    //console.log(magicalMissile);
}
excalibur();
if (magicalMissile >= 400) {
    document.write("CRITICAL HIT ! for "+ magicalMissile + " magical damages with Excalibur")
    
} else {
    document.write("you hit for " + magicalMissile + " magical damages with Excalibur")
}



function armorsmith() {
    craftArmor = craftAbilities + Math.floor((Math.random() * 10 )+ 1)
}
armorsmith();


function helmet() {
    helmetCraftMin = craftArmor - 1;
    if (bronze.OQ >= 100, silver.conduc >50, helmetCraftMin >=1) {
        document.write("   | Helmet crafted")


        
    }else {
        document.write("  |  You failed craft the Helmet , your Armor Skills was " + helmetCraftMin)
    }

        
}
helmet();






//create character 






//craft power up 
generalCraftPopwerUp = craftAbilities + 5;
armorPowerUp = craftArmor + 10;

function weponsmith() {
craftWeapon = craftAbilities + Math.floor((Math.random() * 10)+ 1);


    
}
weponsmith();
//power up  if needed 
weponPowerUp = craftWeapon + 10;



if (craftWeapon > 9) {
    document.write("   | You can craft the Excalibur")
    
} else {
    document.write("   | Not enought craft abilities to make the sword, your craft skill is " + craftWeapon)
}


function alchemist() {
    craftPotion = craftAbilities + Math.floor((Math.random() * 10)+ 1);
}
alchemist();


//example weapon


function createPotion() {
    var section = document.getElementById("alchemy");
    if (craftPotion >=4) {
        

section = document.write("    | You manage to make a Polynectar !, Alchemist skill was " + craftPotion)
} else {
    section = document.write('    | You failed the craft of the potion, skill Alchemist was ' + craftPotion)
}
        
    }

    createPotion();

