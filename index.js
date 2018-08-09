var chalk       = require('chalk');
var clear       = require('clear');
var CLI         = require('clui');
var figlet      = require('figlet');
var inquirer    = require('inquirer');
var Preferences = require('preferences');
var Spinner     = CLI.Spinner;
var GitHubApi   = require('github');
var _           = require('lodash');
var git         = require('simple-git')();
var touch       = require('touch');
var fs          = require('fs');
var files = require('./lib/lib');
var programm = require('commander');
var colors = require('colors');
var inquirer = require('inquirer');
//var character =   require('./class.json')




//build
//intro
clear();
console.log(
    chalk.yellow(
	figlet.textSync('Epic Quest Term', {
	    horyzontalLayout: 'full'
	
	})
	)
	);
	
	
	
	
	
	




//commander

programm
    .version('0.1.1')
    .option('-p, --push', 'pushed')
    .option('-o, --open', 'opened')
    .option('-help, --help', 'help')
    .option('-l, --login', 'login')
    .option('-m, --miner', 'miner')
    .option('-c, --class', 'class')
    .parse(process.argv);

console.log('RPG in a Term');
if (programm.push) console.log('  - pushed'.green);
if (programm.open) console.log('opened'.green);

//log  des class donc crer des options












//question lol
var questions = [
{
    type:'input',
    name:'email',
    message:'Please enter your Email in order to save your journey',
    default: false
    },
{
    type:'list',
    name:'Class',
    message:'Choose a class:',
    choices: ['Cleric','Rogue','Warrior','Wizard']
},
    
    {
        type:'checkbox',
        name: 'location',
        message:'Where do you live ?',
    choices: ['sea', 'underground'],
    // filter: function (val) {
    
    
	// return val.toLowerCase();
    // }
    
    },

    {
        type: "input",
        name:'nick',
        message: ' Enter a character name',
        default: false


    },


    {
        type: 'checkbox',
        name: 'quest',
        message:'Choose an adventures',
        choices: ['kill the Dragon', ' the scarlet witch', ' found the arkenstone']



    },
    {
        type:'editor',
        name: ' story',
        message: ' Who are you ?'



    },

    
    
    
{
    type:'confirm',
    name: 'ready',
    message:' Ready ?',
    default: true



    
}];






var character =  
    
{
    "id":0,
    "faction":"underground swarm",
    "race":
        {   "gobelin":"Underground Goblins",
            "orcs" : "Underground Orcs",
            "trolls": "Underground Trolls"
},
    "location": "The Underground caves",
    "equipment": 
        {"weapon":"dagger",
        "trinket":"lockpicks",
        "special":"poison",
        "consumable":"melusine"}
    





};

//var loading = require('./loading.js');


if (programm.class) inquirer.prompt (questions).then (function (answers) {

   
    
    console.log('\nYour information:');
    console.log(JSON.stringify(answers, null, ' '));
    //module.exports = loading;


});













// if (programm.class) inquirer.prompt (questions).then (function (answers) {
//     orcs = character.race.orcs;

    
//     console.log('You are a ' + character.race.orcs);
    

//     });



    //if (inquirer.answers) is == (questions.type.choices('Cleric').then  (console.log("test cleric ok "))

 //if (programm.class('Cleric')) inquirer.prompt (questions).then (function (answers){



 //});















