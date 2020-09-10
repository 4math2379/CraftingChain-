const RessourcesChainToken = artifacts.require("RessourcesChainToken");
const TokenAuction = artifacts.require("TokenCreateAuction");

contract("Auction", accounts => {
  it("Should accept nft on creation", async () => {
    let nft = await RessourcesChainToken.new();
    let auction = await TokenAuction.new(nft.address);
    const nftAddr = await auction.nonFungibleContract();
    assert.equal(nftAddr, nft.address);
  });
});