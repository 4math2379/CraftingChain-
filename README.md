

![alt text](https://i.imgur.com/mmyGtRd.png) 


##  Blockchain  game conerning havesting resources and craft epic object with it.


### Roadmap for the game

1. **Professions and location need to be implemented.**
2. **Game resources has been created**.
3. **Choose a blockchain to use it ( *NEO or ETH*)**
4. *Finish the Readme*.
5. **NO LEVEL TO EVOLVE IN THE GAME**
6. **Create inventory**
7. 20 August 2017 moved to truffle Framework.


# Professions
## Harvester
This class consist to harvest resources. more Harvester **ablities**, more  the *Harvester* can succes to 
have the best resources.
```javascript
harvestingTool
``` 
| Tool           | resources type| Bonus |
| ---------------|:--------------:| -----:|
| Mining facility| Common         |   + 0 |
| Neofactory     | Rare           |   + 1 |
| Mining stations| Exceptional    |    +2 |
 

 *Those bonus will be add in a formula to succes the mining, still in **progress***.
 ```javascript
 var harvestingAbilities = 1;
 function harvestBronzeSkill(){
     recoltBronzeSKill = harvestingAbilities Math.floor((Math.random()* 10)+ 1);
 }
 harvestBronzeSKill()

function harvestBronzeAction() {
    //setting difficulties who can be reduce by the harvesting tool !
    bronzeHarvestTest = recoltBronzeSkill - 1;
    if ( recoltBronze >=3) {
        //print to the DOM for testing / Invetory will be implemented later
        document.write("   | You successfuly harvest 1 Bronze")


        
    }else {
        document.write("  |  You failed your bronze harvesting , your harvest Skills was " + recoltBronzeSkill)
    }

        
}
harvestBronzeAction();

 ```

## Coming Soon : Crafter and resources type.







  