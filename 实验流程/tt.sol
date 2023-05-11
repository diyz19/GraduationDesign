contract trafficContract {
    address payable public driverAddress;
    uint public orderAmount;
    mapping(address => uint) public balances;

    function confirmPay(uint vehicleId) public payable {
        require(msg.sender == passengerAddress, "Only passenger can confirm pay.");
        require(vehicleId > 0, "Invalid vehicleId.");

        orderAmount = 1 ether; // 假设订单费用为1 ether
        require(msg.value == orderAmount, "Invalid payment amount.");

        driverAddress.transfer(orderAmount);
        balances[driverAddress] += orderAmount;

        emit PaymentConfirmed(vehicleId, msg.sender, driverAddress, orderAmount);
    }

    event PaymentConfirmed(uint vehicleId, address passengerAddress, address driverAddress, uint amount);
}
