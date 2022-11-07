# This document includes steps to be done to create the database for the NFT

### NFT Database id (images) : QmPVEr82S4eTQtZJBUYpbrTLX2MxMMx448jg9nBZPE43cQ
### NFT Database id (metadata) : QmUUzTP7424Xe8ZuJGmWPUpPsszEWH2skXXJhURNgUVyHc
# NFT Database link : https://gateway.pinata.cloud/ipfs/QmUUzTP7424Xe8ZuJGmWPUpPsszEWH2skXXJhURNgUVyHc/

## Step 1: NFT Art Generator
    1.0: Open the NFT Art Generator
    1.1: Click on on "Select Input Folder"
    1.2: Select "@/NFT layers"
    1.3: Number of NFTs: 100
        1.4.0: Background: "90%"
        1.4.1: Body: "100%"
        1.4.2: Eyes: "100%"
        1.4.4: Mouths: "100%"
        1.4.5: Outfits: "100%"
        1.4.6: Beard: "70%"
        1.4.3: Glasses: "80%"
        1.4.7: Common: "97%"
        1.4.8: Legendary: "3%"
    1.5: Click on "Generate NFTs"

## Step 2: Rename and format JSON
    2.0: Rename each JSON file to the following format: "NFT-<number>" (remove .json) : ren *.txt *.
    2.1: format each JSON file (optionnal)

## Step 3: Upload JSON to Pinata
    3.0: Open Pinata
    3.1: Click on "Upload+"
    3.2: Click on "Select"
    3.3: Select the folder output/images
    3.4: Click on "Importer"
    3.5: Give name to dataset : "nft-project-images"
    3.6: Click on "Upload"
    3.7: Repeat with the folder output/metadata
    3.8: Give name to dataset : "nft-project-metadata"




