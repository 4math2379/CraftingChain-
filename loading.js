


var inquirer = require('inquirer');
const Rx = require('rxjs').Observable

var prompts = new Rx.Observable
inquirer.prompt(prompts);

// At some point in the future, push new questions
prompts.next({
  /* question... */
});
prompts.next({
  /* question... */
});

// When you're done
prompts.complete();