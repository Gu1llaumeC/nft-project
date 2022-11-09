async function main() {
  const MyNFT = await ethers.getContractFactory("Purchase_NFT");
  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy(
    "0xA80196d2D2048bF55a15E64472D1F3611Ee44D8A",
    1,
    { value: ethers.utils.parseEther("0.001") }
  );
  await myNFT.deployed();
  console.log("Contract deployed to address:", myNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
