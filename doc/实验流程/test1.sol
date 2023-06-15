pragma solidity ^0.8.0;

contract CrossChainTransfer {
    function transfer(address _from, address _to, uint _amount) public payable {
        require(_from != address(0), "Invalid sender address");
        require(_to != address(0), "Invalid recipient address");
        require(msg.value == _amount, "Incorrect amount of Ether sent");

        (bool success, ) = _to.call{value: _amount}("");
        require(success, "Failed to send Ether");

        emit Transfer(_from, _to, _amount);
    }

    event Transfer(address from, address to, uint amount);
}
