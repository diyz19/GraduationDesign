# asset_transfer_list.go说明

//chainHeadChanSize是侦听ChainHeadEvent的通道的大小。

资产转移链HeadChanSize=10

//txSlotSize用于计算单个事务的数据槽数

//根据其大小进行占用。插槽用作DoS保护，确保

//验证新事务仍然是一项持续的操作（实际上

//O（最大插槽数），其中当前最大插槽数为4）。

assettransSlotSize=32*1024



//txMaxSize是单个事务可以具有的最大大小。此字段具有

//非微不足道的后果：较大的交易要困难得多

//传播成本更高；更大的事务也占用更多的资源

//以验证它们是否适合池。

assettransMaxSize=2*assettransSlotSize//64KB，在没有EIP-2464支持的情况下不要碰撞


//AssettransStatus是列表中显示的资产转移的当前状态。

//AssettransStatus是列表中显示的资产转移的当前状态。

//transblockChain提供了区块链的状态和当前的天然气限制

//在asset_transfer_list和事件订阅者中进行一些预检查。

//AssetTransListConfig是asset_transfer_list的配置参数。

//sanitize检查提供的用户配置，并更改

//AssetTransElement表示asset_ranfer_list的整个元素

//资产转移列表包含所有当前已知的资产转移。资产排序器

//当从网络接收到它们时，请输入列表。

//它们在完成或超过有效时间后退出池。

//NewAssetTransList创建一个新的资产转移列表，用于收集、排序和筛选入站

//来自网络的asset_transfers。

//循环是asset_transfer_list的主要事件循环，等待并对其做出反应

//区块链外部事件以及各种报告和交易

//驱逐事件。


这是一个Go代码，定义了配置结构AssetTransListConfig以及与资产转移相关的一些常量和度量。该代码还定义了一个接口transblockChain，该接口提供区块链的状态和当前的天然气限制。



AssetTransListConfig结构包括用于管理本地事务的Locals、NoLocals、Journal和Rejournal等字段。PriceLimit和PriceBump字段分别用于强制执行最低天然气价格和替换现有交易。其他字段包括用于管理事务槽和排队的AccountSlots、GlobalSlots和AccountQueue。



该代码还包括用于跟踪资产转移的指标，如已知、有效、无效和定价过低的资产转移的数量，以及各种类型的放弃交易。还定义了事务槽的大小和最大事务大小。



transblockChain接口提供了检索区块链和状态数据的方法。该接口还包括用于订阅链头事件的方法。

此代码片段似乎是Go编程语言实现的一部分，用于管理资产事务列表。以下是代码提供的功能的简要摘要：



Stop（）：此方法通过取消订阅所有已注册的订阅并等待所有挂起的事件完成来终止AssetTransList。

SubscribeAssetTransEvent（ch chan<-AssetTransEvent）：此方法注册用于接收新资产交易事件的订阅，并开始将其发送到给定通道。

Stats（）：此方法检索AssetTransList的当前统计信息，包括挂起和排队的资产事务数。

Content（）：此方法检索AssetTransList的数据内容，包括所有挂起和排队的资产交易，按帐户分组，按随机数排序。

Pending（）：此方法检索所有当前可处理的挂起资产交易，这些交易按原始帐户分组并按nonce排序。返回的事务集是一个副本，可以通过调用代码自由修改。

这段代码似乎正在实现一个区块链交易池。AssetTransList结构是一个事务元素列表，其中包括挂起、队列和已执行的事务。add方法在验证后将新事务添加到挂起列表中。ActiveChain方法将活动链添加到地址中。matchOut方法根据发送方的地址和输出链将事务输出与相应的事务请求进行匹配。matchIn方法将事务输入与相应的事务请求相匹配，并根据接收方的地址和输入链进行输出。

这是管理资产转移列表的方法AssetTransList的代码片段。它包括几种管理事务状态、从列表中删除元素以及在列表之间传输事务状态的方法。



Status方法返回由帐户ID标识的一批事务的状态。removeEle方法从队列中删除单个AssetTransElement。transferState方法将事务从挂起移动到队列，并删除所有无效的事务。transferSuccess方法在接收到中的事务时将元素的结果更改为成功。



还有一个接口方法TransferSuccess调用TransferSuccess。



请注意，有一些注释行表明，该代码可能已从以前的版本进行了修改，或者可能旨在供将来使用。











> 如果已做到现在这个实验，笔者将默认为你已经完成了复现手册中的 `第1~8个实验`。即：成功在 `geth1` 的基础上完成了出租车调度系统的复现。

本实验基于 `geth-tree` 完成，[下载地址](https://github.com/LancerEnk/GraduationDesign/blob/main/geth1.zip)在这里，整体的复现步骤与[《7 调度系统复现实验》](https://github.com/LancerEnk/GraduationDesign/blob/main/doc/%E5%A4%8D%E7%8E%B0%E6%89%8B%E5%86%8C/7%20%E8%B0%83%E5%BA%A6%E7%B3%BB%E7%BB%9F%E5%A4%8D%E7%8E%B0%E5%AE%9E%E9%AA%8C.md)基本一致。

# 01 常用命令

第一步还是配置`genesisgtrie.json`

```json
{
  "config": {
    "chainId": 91036,
    "homesteadBlock": 0,
    "eip150Block": 0,
    "eip155Block": 0,
    "eip158Block": 0,
    "byzantiumBlock": 0,
    "constantinopleBlock": 0,
    "petersburgBlock": 0
  },
  "alloc": {},
  "coinbase": "0x0000000000000000000000000000000000000000",
  "difficulty": "0x20000",
  "extraData": "",
  "gasLimit": "0xffffffff",
  "nonce": "0x0000000000000042",
  "mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "timestamp": "0x00"
}
```

初始化区块链：

```bash
geth-tree --identity "MyEth" --rpc --rpcport "8081" --rpccorsdomain "*" --datadir gethdata --port "30314" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "wx4" init genesisgtrie.json
```

启动区块链：

```bash
geth-tree --identity "MyEth" --rpc --rpcport "8081" --rpccorsdomain "*" --datadir gethdata --port "30314" --nodiscover --rpcapi "eth,net,personal,web3,miner,admin" --ws --wsaddr='localhost' --wsport "8546" --wsorigins='*' --wsapi 'personal,net,eth,web3,admin' --networkid "wx4" --allow-insecure-unlock --dev.period 1 console
```

创建账户：

```js
for (i = 0; i < 4; i++) { personal.newAccount("123") }
```

解锁账户：

```js
for (i = 0; i < eth.accounts.length; i++) { personal.unlockAccount(eth.accounts[0],"123",30000) }
```

检查余额：

```js
for (i = 0; i < eth.accounts.length; i++) { console.log(eth.getBalance(eth.accounts[i])) }
```

# 02 初始化并启动区块链

新建`treeTaxiSystem`文件夹，将01节中的`genesisgtrie.json`内容放置入根目录。在`treeTaxiSystem`文件夹下启动终端，分别使用初始化区块链、启动区块链的指令操作，打开`JavaScript`控制台。

在控制台中，执行00节中的创建账户和解锁账户指令后，利用`eth.accounts`获取所有账户的地址，使用如下Python程序，生成即将添加进入`genesisgtrie.json`的代码：

```python
# TaxiSystem/accounts_processor.py
l = eth.accounts的输出，原样粘贴过来即可，应该是["...", "...", ...]的格式

for each in l:
    print(
        f'"{each}": {{ "balance": "50000000000000000000000000000000000000000", "position": "test0123456789", "txtime": 1 }},'
    )
```

记录该程序的输出，直接粘贴到`genesis.json`的`alloc`字段中去。

> 该程序的输出的最后一行带有一个多余的逗号，粘贴到`genesis.json`中去之后请务必删除。

在打开的控制台中输入`exit`退出控制台，然后删除目录`treeTaxiSystem/gethdata/geth`。随后，再运行一次初始化区块链和启动区块链的代码。此时，所有账户应该都有余额了。可以用`eth.geBalance(账户地址)`来检查余额.

**重要步骤**↓

* 每次重新启动JS控制台，都需要再解锁一次账户。
    > 如果不解锁账户的话，可能会导致miner.start()无法挖到合约地址

# 03 部署合约

首先是`StoreMap.sol`合约。该合约的`Solidity`源代码位于仓库的`CompileWithTruffle/contracts/StoreMap.sol`。使用《9 关于使用truffle编译solidity源代码》中介绍的方法获得`abi`和`bytecode`之后，打开[这个用于JSON压缩转义的网站](https://www.bejson.com/zhuanyi/)，将获得的`abi`（形如`"abi": [...]`）丢进去，点击输入框下方的“压缩并转义”，复制走从第一个`[`开始之后的全部内容。

在打开的控制台中输入如下指令：

```js
abi = JSON.parse('复制来的内容')
bytecode = 获得的bytecode，字符串类型

StoreMapContract = web3.eth.contract(abi);
web3.eth.estimateGas({data: bytecode})
StoreMap = StoreMapContract.new({
    from: web3.eth.accounts[0], 
    data: bytecode, 
    gas: '3000000',
    position:"wx411111111111",
    txtime:277001
  },function (e, contract){
    console.log(e, contract);
    if(!e){
        if(!contract.address) {
            console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
        } else {
            console.log("Contract mined! Address: " + contract.address);
            console.log(contract);
        }
    }
});
```

开始挖矿，并留意输出：

```js
miner.start()
/*
-- snip --
null [object Object]
Contract mined! Address: 0xef00ade84bb560afe4b562bfd4a81300c17ac52f
[object Object]
-- snip --
*/
miner.stop()  // 停止挖矿以节省电脑性能
```

这就是StoreMap合约的地址了。妥善保存，以供日后使用。

## StoreTraffic合约

与StoreMap.sol的部署方法一致。

```js
abi = JSON.parse('复制来的内容')
bytecode = 获得的bytecode，字符串类型

trafficContract = web3.eth.contract(abi);
web3.eth.estimateGas({data: bytecode})
traffic = trafficContract.new({
    from: web3.eth.accounts[0], 
    data: bytecode, 
    gas: '4000000',
    position:"wx411111111111",
    txtime:277001
  },function (e, contract){
    console.log(e, contract);
    if(!e){
        if(!contract.address) {
            console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
        } else {
            console.log("Contract mined! Address: " + contract.address);
            console.log(contract);
        }
    }
});
```

同样开始挖矿并留意输出：

```js
miner.start()
/*
-- snip --
null [object Object]
Contract mined! Address: 0xf03dafc4fadae50b1b7bc0f602ae722038f7fe51
[object Object]
-- snip --
*/
miner.stop()  // 停止挖矿以节省电脑性能
```

这就是StoreTraffic合约的地址了。妥善保存，以供日后使用。

# 04 上传地图

`upload_map`文件夹找到文件`uploadmap_cjz_3.js`，打开并修改一下其中的内容：

```js
// -- snip --

// contract address 
var myContractInstance = MyContract.at("StoreMap合约的地址");
var account = "eth.accounts[0]的内容";

// -- snip --
```

注意其中发送交易的位置`position`需要为wx4范围,不然无法打包交易。

* 即可以在原 `geth1` 支持的出租车调度系统的`uploadmap_cjz_3.js`文件的基础上，把发送交易时的`"w3511111111111"`改成`"wx411111111111"`。

# 05 修改代码

## 修改 regionid 和 position

启动过程和原来的一致，只是启动文件根据区块链的不同有所变化，主要是`regionid`和`position`的变化。

例如，在 `sys_passenger_region_noPos.html` 中做如下改动：

```js
// geth1

trafficContract.methods.confirmPay(vehicleId).send({ from: passengerId, gas: 5000000, position: "w3511111111111", txtime: 278000 }).then(function (result) {

// geth-tree

trafficContract.methods.confirmPay(vehicleId).send({ from: passengerId, gas: 5000000, position: "wx411111111111", txtime: 278000 }).then(function (result) {
```

上述改动需要在代码中所有牵扯到发送交易的地方进行修改。

## 更改文件以加入账户信息

同《7 调度系统复现实验》中此部分的内容一样，对`js/py`文件中的相关部分进行修改。

# 06 启动测试

在挖矿的状态下，分别启动`vehicle_test.py`和`passenger_test.py`两个程序，从而启动测试。
