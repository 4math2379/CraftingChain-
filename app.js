var chalk = require('chalk');
var classFile = require('./class.json');










/*spec des classes*/

function classPicked() {
    console.log(JSON.stringify = classFile, function(data) {
        var className = classFile.name;
        var classRace = classFile.race;



        //mettre en place les outputs
      for (i = 0; i < data.length; i ++) {
        className.find('.panel-name').text(data[i].name);
        classRace.find('.class-race').text(data[i].race);
        // classTemplate.find('.class-equipment').text(data[i].equipment);
        // classTemplate.find('.class-location').text(data[i].location);
        // classTemplate.find('.class-picked').attr('data-id', data[i].id);

        //classRow.append(classTemplate.JSON());
      }
    });

    
  }


   function classRun () {
      console.log(
          chalk.red(
              figlet.textSync(classFile.name)
          )
      );
    }
   
      



      //CORRIGER L'ARRAY WEB3















// $(function() {
//     $(window).load(function() {
//       App.init();
//     });
//   });