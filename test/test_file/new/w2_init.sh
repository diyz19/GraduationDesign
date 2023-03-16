#!/bin/sh

# 我们可以创建一个工作目录，专供节点2使用
if [ ! -d node_w2 ]; then
    mkdir node_w2
fi

cd node_w2 || exit

# geth-tree --identity "MyEth" --rpc --rpcport "8542" --rpccorsdomain "*" --datadir gethdata --port "30302" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w2" init genesisgtrie.json
# 如果发现gethdata文件夹已经存在，就不要再进行初始化了
gethdata_folder=gethdata
if [ ! -d "$gethdata_folder" ]; then
    # 此处使用我们放入/usr/bin中的二进制文件代替了路径
    geth-tree --identity "MyEth" --rpc --rpcport "8542" --rpccorsdomain "*" --datadir "$gethdata_folder" --port "30302" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w2" init ../genesisgtrie.json
fi

geth-tree --identity "MyEth" --rpc --rpcport "8542" --rpccorsdomain "*" --datadir "$gethdata_folder" --port "30302" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w2" --allow-insecure-unlock --dev.period 1 --preload "../w2_addPeer.js" console

#geth_w2_2
#/home/zc/go/src/github.com/ethereum/go-ethereum/build/bin/geth --identity "MyEth" --rpc --rpcport "8543" --rpccorsdomain "*" --datadir gethdata --port "30303" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w2" init genesisgtrie.json
#/home/zc/go/src/github.com/ethereum/go-ethereum/build/bin/geth --identity "MyEth" --rpc --rpcport "8543" --rpccorsdomain "*" --datadir gethdata --port "30303" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w2" --syncmode "full" --allow-insecure-unlock --dev.period 1 console
#/home/zc/go/src/github.com/ethereum/go-ethereum/build/bin/geth --identity "MyEth" --rpc --rpcport "8543" --rpccorsdomain "*" --datadir gethdata --port "30303" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w2" --allow-insecure-unlock --dev.period 1 --preload "/home/zc/go/src/github.com/ethereum/go-ethereum/zc_test/crosschain_transfer_test/w2_addPeer.js" console


#功能测试
#/home/zc/go/src/github.com/ethereum/go-ethereum/build/bin/geth-2023-merge-success --identity "MyEth" --rpc --rpcport "8542" --rpccorsdomain "*" --datadir gethdata --port "30302" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w2" init genesisgtrie.json
#/home/zc/go/src/github.com/ethereum/go-ethereum/build/bin/geth-2023-merge-success --identity "MyEth" --rpc --rpcport "8542" --rpccorsdomain "*" --datadir gethdata --port "30302" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w2" --allow-insecure-unlock --dev.period 1 --preload "/home/zc/branch_test/crosschain_transfer_test/w2_addPeer.js" console
