
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

then you need to get the purchase contract address by using the transaction hash from the console

```sh
node scripts/