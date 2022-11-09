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

async function paySeller() {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest");

  const tx = {
    from: PUBLIC_KEY,
    to: contractAddress,
    nonce: nonce,
    gas: 500000,
    data: nftContract.methods.paySeller().encodeABI(),
  };

  const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
  signPromise.then((signedTx) => {
    web3.eth
      .sendSignedTransaction(signedTx.rawTransaction, function (err, hash) {
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
      .then((receipt) => {
        console.log(receipt);
      })
      .catch((err) => {
        console.log("Promise failed:", err);
      });
  });
}

paySeller();
