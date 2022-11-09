// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract Purchase_NFT {
    uint256 public price;
    uint256 public tokenId;
    address public contractAddress;
    address payable public seller;
    address payable public buyer;

    enum State {
        Created,
        Locked,
        Release,
        Inactive
    }
    State public state;

    constructor(address _contractAddress, uint256 _tokenId) payable {
        seller = payable(msg.sender);
        price = msg.value / 2;
        tokenId = _tokenId;
        contractAddress = _contractAddress;
        state = State.Created;
    }

    /// The function cannot be called at the current state.
    error InvalidState();
    /// Only the buyer can call this function.
    error OnlyBuyer();
    /// Only the seller can call this function.
    error OnlySeller();

    modifier inState(State _state) {
        if (state != _state) revert InvalidState();
        _;
    }

    modifier onlyBuyer() {
        if (msg.sender != buyer) revert OnlyBuyer();
        _;
    }

    modifier onlySeller() {
        if (msg.sender != seller) revert OnlySeller();
        _;
    }

    /* function giveApprovalToContract() public onlySeller {
        IERC721(contractAddress).approve(address(this), tokenId);
    } */

    function confirmPurchase() external payable inState(State.Created) {
        require(
            msg.value == (2 * price),
            "Please send in 2x the purchase amount"
        );
        buyer = payable(msg.sender);
        // IERC721(contractAddress).transferFrom(seller, buyer, tokenId);
        state = State.Inactive;
        buyer.transfer(price);
        seller.transfer(address(this).balance);
    }

    function confirmReceived() external onlyBuyer inState(State.Locked) {
        state = State.Release;
        buyer.transfer(price);
    }

    function paySeller() external inState(State.Release) onlySeller {
        state = State.Inactive;
        seller.transfer(3 * price);
    }

    function abort() external onlySeller inState(State.Created) {
        state = State.Inactive;
        seller.transfer(address(this).balance);
    }
}
