#!/bin/sh

# 我们可以创建一个工作目录，专供节点1使用
if [ ! -d node_w1 ]; then
    mkdir node_w1
fi

cd node_w1 || exit

# cd /home/zc/branch_test/geth_w

#保存log
#/home/zc/go/src/github.com/ethereum/go-ethereum/build/bin/geth --identity "MyEth" --rpc --rpcport "8541" --rpccorsdomain "*" --datadir gethdata --port "30301" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w" init genesisgtrie.json
#/home/zc/go/src/github.com/ethereum/go-ethereum/build/bin/geth --identity "MyEth" --rpc --rpcport "8541" --rpccorsdomain "*" --datadir gethdata --port "30301" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w" --syncmode "branch" --allow-insecure-unlock --dev.period 1 --preload "/home/zc/go/src/github.com/ethereum/go-ethereum/zc_test/crosschain_transfer_test/w_setbranch.js" console >> /home/zc/go/src/github.com/ethereum/go-ethereum/zc_test/crosschain_transfer_test/log3 

# 显示等级设定,log
# /home/zc/go/src/github.com/ethereum/go-ethereum/build/bin/geth --identity "MyEth" --rpc --rpcport "8541" --rpccorsdomain "*" --datadir gethdata --port "30301" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w" init genesisgtrie.json
# /home/zc/go/src/github.com/ethereum/go-ethereum/build/bin/geth --identity "MyEth" --rpc --rpcport "8541" --rpccorsdomain "*" --datadir gethdata --port "30301" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w" --syncmode "branch" --allow-insecure-unlock --dev.period 1 --preload "/home/zc/go/src/github.com/ethereum/go-ethereum/zc_test/crosschain_transfer_test/w_setbranch.js" --verbosity 4 console 


# 正常版本
# 如果发现gethdata文件夹已经存在，就不要再进行初始化了
gethdata_folder=gethdata
if [ ! -d "$gethdata_folder" ]; then
    geth-tree --identity "MyEth" --rpc --rpcport "8541" --rpccorsdomain "*" --datadir gethdata --port "30301" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w" init ../genesisgtrie.json
fi

## 无log
geth-tree --identity "MyEth" --rpc --rpcport "8541" --rpccorsdomain "*" --datadir "$gethdata_folder" --port "30301" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w" --syncmode "branch" --allow-insecure-unlock --dev.period 1 --preload "../w_setbranch.js" console
## 有log
# geth-tree --identity "MyEth" --rpc --rpcport "8541" --rpccorsdomain "*" --datadir gethdata --port "30301" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w" --syncmode "branch" --allow-insecure-unlock --dev.period 1 --preload "w_setbranch.js" console >> log3

# restart-无log
# /home/zc/go/src/github.com/ethereum/go-ethereum/build/bin/geth --identity "MyEth" --rpc --rpcport "8541" --rpccorsdomain "*" --datadir gethdata --port "30301" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w" --syncmode "branch" --allow-insecure-unlock --dev.period 1 console 

## restart-有log
# /home/zc/go/src/github.com/ethereum/go-ethereum/build/bin/geth --identity "MyEth" --rpc --rpcport "8541" --rpccorsdomain "*" --datadir gethdata --port "30301" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w" --syncmode "branch" --allow-insecure-unlock --dev.period 1 console >> /home/zc/branch_test/crosschain_transfer_test/log3

# restart--log等级
# /home/zc/go/src/github.com/ethereum/go-ethereum/build/bin/geth --identity "MyEth" --rpc --rpcport "8541" --rpccorsdomain "*" --datadir gethdata --port "30301" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w" --syncmode "branch" --allow-insecure-unlock --dev.period 1 --verbosity 4 --preload "/home/zc/branch_test/crosschain_transfer_test/w_setbranch.js" console 

# 功能测试-w
# /home/zc/go/src/github.com/ethereum/go-ethereum/build/bin/geth-2023-merge-success --identity "MyEth" --rpc --rpcport "8541" --rpccorsdomain "*" --datadir gethdata --port "30301" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w" init genesisgtrie.json
# /home/zc/go/src/github.com/ethereum/go-ethereum/build/bin/geth-2023-merge-success --identity "MyEth" --rpc --rpcport "8541" --rpccorsdomain "*" --datadir gethdata --port "30301" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w" --syncmode "branch" --allow-insecure-unlock --dev.period 1 --preload "/home/zc/go/src/github.com/ethereum/go-ethereum/zc_test/crosschain_transfer_test/w_setbranch.js" console 
