const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545'); // 这里使用的是本地Ganache测试网络，你需要根据实际情况修改URL

const contractAddress = '0x1234567890123456789012345678901234567890'; // 合约地址
const privateKey = '0x1234567890123456789012345678901234567890123456789012345678901234'; // 发送方的私钥
const fromAddress = '0x1234567890123456789012345678901234567890'; // 发送方的地址
const toAddress = '0x0987654321098765432109876543210987654321'; // 接收方的地址
const amount = web3.utils.toWei('1', 'ether'); // 要转移的以太币数量，这里假设转移1个以太币

// 根据私钥创建一个Web3账户对象
const account = web3.eth.accounts.privateKeyToAccount(privateKey);

// 获取合约实例
const contract = new web3.eth.Contract(contractABI, contractAddress);

// 调用合约的transfer函数
const txObject = {
  from: fromAddress,
  to: contractAddress,
  gas: 1000000,
  gasPrice: web3.utils.toWei('10', 'gwei'),
  value: amount,
};

contract.methods.transfer(toAddress).send(txObject, function(error, result) {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
  }
});