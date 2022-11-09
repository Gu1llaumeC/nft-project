async function main() {
  const MyNFT = await ethers.getContractFactory("NFT_CGL");
  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy(
    "0x7cE2FCD563454d7f95d3F5fA25321D1aF909a77e",
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
