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
	figlet.textSync('A n v i l', {
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
    .parse(process.argv);

console.log('command usedh:');
if (programm.push) console.log('  - pushed'.green);
if (programm.open) console.log('opened'.green);

//log interface






//question lol
var questions = [
{
    type:'input',
    name:'email',
    message:'Please enter your Email',
    default: false
    },
{
    type:'list',
    name:'activities',
    message:'What is your role ?',
    choices: ['Hobbyist','Developer','Designer'],
    filter: function (val) {
    
    
	return val.toLowerCase();
    
    
    }
    







}];


if (programm.login) inquirer.prompt (questions).then (function (answers) {







    console.log('\nYour information:');
    console.log(JSON.stringify(answers, null, ' '));

});






















