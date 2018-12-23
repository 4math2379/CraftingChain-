
//class for the based


class Crafter {


    constructor(name,level) {
        this.name = name;
        this.level = level;
    }

    //method
    greet() {
        return  `${this.name} says hello!`;
    }
}


class Harvester extends Crafter {
    constructor(name, harverstintools , craftskill) {
        super(name, craftskill);
        this.harverstintools = harverstintools;
    }
    //method harvest
    harvest() {
        return `${this.name} harvest with ${this.harverstintools}.`;
    }
}


//init du char
const crafter1 = new Harvester('Saulot',"BER13", 1);

console.log(crafter1.harvest());
console.log(crafter1.greet());



let playerX = Harvester;
let playerY = Crafter;

console.log(playerX, playerY);