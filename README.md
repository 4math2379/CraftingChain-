

![alt text](https://image.flaticon.com/icons/svg/2708/2708997.svg) 


## Blockchain game concerning harvesting resources and craft epic object with it.

Using the Ethereum Blockchain, **Blockchain101** got in development a Web dApp Browser game:  CraftingChain`.

Using Ethereum [ETH], user can *sample* resources in order to Craft items [Tools] or Stake that resources, both will be non fungible tokens [ERC721].

In **CraftingChain`** *Tools* and *Resources* can be traded or sold to other user.
A decentralized exchange inside the dApp will be add later after release.



### Tasks during the game development [update 1st April 2020]

- [ ]  **Professions and location need to be implemented.**
- [ ]  **Game resources has been created**.
- [x]  ~~Choose a blockchain to use it~~  <*ETHEREUM on September 2018*>
- [ ]  *Finish the Readme*. :sweat_smile:
- [x]  **NO LEVEL REQUIRE TO EVOLVE IN THE GAME** ☣️
- [x]  ~~**Create inventory**~~ *removed*
- [x]  **20 August 2018 moved to truffle Framework.** 🍩
- [ ]  **update the Smart contract, looking to move to ~~VueJS~~ or React**
- [ ]  **adding ERC721 for all contracts**
- [ ]  **Apply inheritance for each step of the Smart contract**
- [ ]  **Audit security with MythX**
- [ ]  **Ledger NanoS/NanoX integration and => allow staking ?**


# How it will work :
## Harvester Smart contract
This contract [Harvester.sol] consist to sample resources, by buying it.


**Resources** are the main asset (Token) in **CraftingChain`**.


With Harvester user have **abilities**, the *Harvest* can have the success to extract the best resources and activate a **Staking** of that resource.

## Token available on CraftingChain` ⛓


#### **RCT**
During the *Harvest.sol* instance by Web3, user can sample a resource by buying it, i will become a **RCT**.

Resource Chain Token, is a ERC 721 non unique Token it's mean it will have a unique ID and his own **Resources** stats. 

Those stats will be generated at random who will be improved by the **Facilities** owned by the user. *Remember those facilities activate the Staking effect of those RCT*. 

**RCT** can be traded, sold or used to craft a **Tool**, who will be an ERC 721 Token named **CCT** => Crafting Chain Token.

 

#### **CCT**  
Crafting Chain Token, is an ERC 721 non unique Token it's mean it will have a unique ID. [cappedStats]. 

Those tokens can be traded,sold or used to *Craft* a **tool**, it's mean inside the dApp user can craft by buying it if they have the required resources inside her/his wallet.



# Abstract [Pre-Alpha development]

Players can buy some tools named *Facilities*. 🏭

Only one type of facility can be own per player.

| Tool           | Staking Bonus  | Bonus |
| ---------------|:--------------:| -----:|
| Mining facility| Common         |   + 0 |
| Factory        | Rare           |   + 1 |
| Mining stations| Exceptional    |    +2 |

All those tools will be a add into Smart Contact.
- [ ] Mining Facility Smart Contract.
- [ ] Factory Smart Contract.
- [ ] Mining Stations Smart Contract.

Buying a facilities open the user to have access to staking effect on her/his Token stored inside his wallet.
 
 

## Resources Stats.

Resources have, with their name,  3 stats : 
**Quality** : Between 1 to 1000. 
**Cold Resistance** : Between 1 to 1000. 
**Shock Resistance**: Between 1 to 1000.

Those stats alter the result of the Tools crafted. Better stats give the opportunity to have a better tool.



### Using ERC721 for adding this features.

*Harvest.sol* is the main contract on the Blockchain who will set and get data ( content as resources).
Inside this contract the randomized resources stats will be generated.

*Adventurer.sol* this contract will be instanced for the user in order to store all items [address] he gonna trade with, by storing resources a *Staking* of that resources will take effect. [Harvester.sol(soon)].

*Crafter.sol* this contract instance element for player who prefer craft and sell items.  it will interact with others smart contract to make an economic cycle.











  