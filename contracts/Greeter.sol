// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title Sample contract
/// @author apmyp-v
contract Greeter {
    address owner;
    string private greet;

    /// @notice Stores contract deployer as an owner
    constructor() {
        owner=msg.sender;
    }

    /// @notice Functions modifier, checks that tx sender is a contract owner
    modifier onlyOwner() {
        require(msg.sender==owner,"You are not an owner!");
        _;
    }

    /// @notice Sets new greet message
    /// @param _greet A new greet message
    function setGreet(string memory _greet) public onlyOwner {
        greet=_greet;
    }

    /// @notice Getter for greet message
    /// @return string Current greet message from blokchain storage
    function getGreet() public view returns(string memory) {
        return greet;
    }
}