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



App = {
    web3Provider: null,
    contracts: {},





/*spec des classes*/

init:function () {
    // Load pets.
    $.getJSON('class.json', function(data) {
        var classRow = $('#classRow');
      var classTemplate = $('#classTemplate');

      for (i = 0; i < data.length; i ++) {
        classTemplate.find('.panel-name').text(data[i].name);
        classTemplate.find('.class-race').text(data[i].race);
        classTemplate.find('.class-equipment').text(data[i].equipment);
        classTemplate.find('.class-location').text(data[i].location);
        classTemplate.find('.class-picked').attr('data-id', data[i].id);

        classRow.append(classTemplate.JSON());
      }
    });

    return App.initWeb3();
  },


  initWeb3: function() {
    // Is there an injected web3 instance?
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
    } else {
      // If no injected web3 instance is detected, fall back to Ganache
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    web3 = new Web3(App.web3Provider);
    
        return App.initContract();
      };



      //CORRIGER L'ARRAY WEB3




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











if (programm.login) inquirer.prompt (questions).then (function (answers) {

   
    
    console.log('\nYour information:');
    console.log(JSON.stringify(answers, null, ' '));

});



if (programm.miner) inquirer.prompt (questions).then (function (answers) {



//repair


});








};

$(function() {
    $(window).load(function() {
      App.init();
    });
  });














