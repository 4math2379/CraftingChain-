

![alt text](https://image.flaticon.com/icons/svg/2708/2708997.svg) 


##  Blockchain game concerning harvesting resources and craft epic object with it.

Using the Ethereum Blockchain, **Blockchain101** will release a  Web dApp Browser game:  CraftingChain`.

Using Ethereum [ETH], user can *sample* resources in order to Craft items [Tools] or Stake that resources, both will be non fungible tokens [ERC721].

In **CraftingChain`** *Tools* and *Resources* can be traded or sold to other user.
A decentralized exchange inside the dApp will be add later after release.



### Tasks during the game development[update 1st April 2020]

- [ ]  **Professions and location need to be implemented.**
- [ ]  **Game resources has been created**.
- [x]  ~~Choose a blockchain to use it~~  <*ETHEREUM on September 2018*>
- [ ]  *Finish the Readme*. :P
- [x]  **NO LEVEL REQUIRE TO EVOLVE IN THE GAME** ☣️
- [x]  ~~**Create inventory**~~ *removed*
- [x]  **20 August 2018 moved to truffle Framework.**
- [ ]  **update the Smart contract, looking to move to ~~VueJS~~ or React**
- [ ]  **adding ERC721 for all contracts**
- [ ]  **Audit security with MythX**


# How it will work :
## Harvester Smart contract
This contract [Harvester.sol] consist to sample resources, by buying it.

**Resources** are the main asset (Token) in **CraftingChain`**.


With Harvester user have **abilities**, the *Harvest* can have the success to extract the best resources and activate a **Staking** of that resource.


### Abstract [Pre-Alpha development]

Players can buy some tools named *Facilities*. 
Only one Kind of Facilities per player.

| Tool           | Staking Bonus  | Bonus |
| ---------------|:--------------:| -----:|
| Mining facility| Common         |   + 0 |
| Factory        | Rare           |   + 1 |
| Mining stations| Exceptional    |    +2 |

All those tools will be a separate Smart Contact[InProcessing].
- [ ] Mining Facility Smart Contract.
- [ ] Factory Smart Contract.
- [ ] Mining Stations Smart Contract.

Buying a facilities open the user to have 
 
 

## Players and resources type:
### Using ERC721 for adding this features.

*Harvest.sol* is the main contract on the Blockchain who will set and get data ( content as resources).

*Adventurer.sol* this contract will be instanced for the user in order to store all items [address] he gonna trade with, by storing resources a *Staking* of that resources will take effect. [Harvester.sol(soon)].

*Crafter.sol* this contract instance element for player who prefer craft and sell items.  it will interact with others smart contract to make an economic cycle.


All items and resources will be non fungible Token ERC 721.









  