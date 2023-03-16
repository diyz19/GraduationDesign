# 实验记录

## 实验说明

按照周畅前辈给的简单指导进行的实验

## 实验步骤

### 克隆仓库到本地

### 启动第一个节点

启动w1_init.sh（自动设置branchnode）

观察该文件中除注释以外的内容：

修改绝对路径。将`geth-tree`二进制文件复制到`/usr/bin`目录中

### 启动第二、第三个节点

w11_1和w12_1添加父节点：复制w1的enode,替换w11_1_addPeer.js和w12_1_addPeer.js中的enode

首先，在第一个节点运行的终端中，输入以下指令，获取该节点的`enode`编号：

```js
admin.nodeInfo.enode
```

在`w11_addPeer.js`和`w12_addPeer.js`中

```js
admin.addPeer
```

然后启动节点2：

```bash
geth-tree --identity "MyEth" --rpc --rpcport "8542" --rpccorsdomain "*" --datadir gethdata --port "30302" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w2" --allow-insecure-unlock --dev.period 1 --preload "../w2_addPeer.js" console
```

配置节点3类似。

配置完成之后，启动两个新终端，依次键入：

```bash
sh w11_init.sh

sh w12_init.sh
```

发现报错
```
Fatal: Failed to start the JavaScript console: ../w11_addPeer.js: 
```
