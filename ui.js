//test for the UI
var inquirer = require('inquirer');
var  Rx = require('rxjs');
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
var { from } = require('rxjs');




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



var observable = from(questions);








    inquirer.prompt(observable).ui.process.subscribe(
        function(ans) {
          console.log('Answer is: ', ans);
        },
        function(err) {
          console.log('Error: ', err);
        },
        function() {
          console.log('Completed');
        }
      );









//prompt it 

