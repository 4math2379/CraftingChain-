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








//build
//intro
clear();
console.log(
    chalk.red(
	figlet.textSync('Dungeon Term', {
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
    choices: ['Cleric','Rogue','Warrior','Wizard'],
    filter: function (val) {
    
    
	return val.toLowerCase();
    }
    
    },
    
{
    type:'confirm',
    name: 'mining',
    message:' Ready ?',
    default: true



    







}];



//spec des class 








if (programm.login) inquirer.prompt (questions).then (function (answers) {

   
    
    console.log('\nYour information:');
    console.log(JSON.stringify(answers, null, ' '));

});



if (programm.miner) inquirer.prompt (questions).then (function (answers) {



//repair


});

























