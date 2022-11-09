require("dotenv").config();

const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const contract = require("../artifacts/contracts/Purchase_NFT.sol/Purchase_NFT.json");
const contractAddress = CONTRACT_ADDRESS;
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

async function purchaseNFT() {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest");

  const tx = {
    from: PUBLIC_KEY,
    to: contractAddress,
    nonce: nonce,
    gas: 500000,
    data: nftContract.methods.confirmPurchase().encodeABI(),
    value: web3.utils.toWei("0.001", "ether"),
  };

  const signPromise = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
  web3.eth
    .sendSignedTransaction(signPromise.rawTransaction, function (err, hash) {
      if (!err) {
        console.log(
          "The hash of your transaction is:",
          hash,
          "Check Alchemy's Mempool to view the status of your transaction!"
        );
      } else {
        console.log(
          "Something went wrong when submitting your transaction:",
          err
        );
      }
    })
    .on("receipt", console.log);
}

export default purchaseNFT;
