
# Projet-nft

## Objectives

- [x] Create a NFT contract
- [x] Create a minting function on the contract and the frontend
- [x] create a safe remote purchase contract et test it
- [ ] and use it on the frontend to buy and sell NFTs

## Prerequisites

```sh
npm install
```

You need a metamask account and a wallet with some Goerli ETH.

## Run

```sh
cd frontend
npm start
```

## Tests

### Minting

1. go to http://localhost:3000/collection
2. click on the profile icon
3. click on the mint button (with the console open to get the transaction hash)
4. Congratulation, you just minted your first NFT
5. You can even see it on metamask by adding the nft contract wallet and the token id from https://goerli.etherscan.io/tx/${transactionHash}

### Safe remote purchase

1. modify the .env.template in the contracts-hanlders folder and rename it .env

```sh
cd contracts-handlers
npx hardhat --network goerli run scripts/deploy.js
```

then you need to get the purchase contract address by using the transaction hash from the console and change the contract address in the .env file

```sh
node scripts/purchase-nft.js
```

You can check the transaction on https://goerli.etherscan.io/tx/${transactionHash}

then you will have to confirm that you received the NFT

```sh
node scripts/confirmReceived.js
```

You can check the transaction on https://goerli.etherscan.io/tx/${transactionHash}

And then you will have to pay the seller

```sh
node scripts/paySeller.js
```

**Note that some of this steps should be done only by the seller or the buyer but if you play both roles it works too** (You will just not see that some of the steps should not be done by you as the buyer or the seller)

You can also try to cancel the transaction
This must be done by the seller before the buyer purchase the NFT

```sh
node scripts/abortSelling.js
```

## Why this project

This project needs the blochain to be able to acquire NFTs and to be able to sell them **safely**.

## What's next

We will continue to work on this project to be sure that every feature has been implemented and is working properly.

The idea behind this project is to let a user add a filter to the NFT generator and then create automatically a NFT contract using the new NFTs generated to let him mint a few of them.

That way we create a new collection of NFTs more unique than the previous ones.

## Authors

- [Guillaume Chollet](https://www.github.com/Gu1llaumeC)
- [Clément Pellen](https://www.github.com/ClementPellen)
- [Emily Richardson](https://www.github.com/Emrichardson)