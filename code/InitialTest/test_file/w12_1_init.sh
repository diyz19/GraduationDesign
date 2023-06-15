cd /home/zc/20230203-treechain_expermiment/2childs/geth_w12_1


/home/zc/go/src/github.com/ethereum/go-ethereum/build/bin/geth --identity "MyEth" --rpc --rpcport "8521" --rpccorsdomain "*" --datadir gethdata --port "30321" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w12" init genesisgtrie.json
/home/zc/go/src/github.com/ethereum/go-ethereum/build/bin/geth --identity "MyEth" --rpc --rpcport "8521" --rpccorsdomain "*" --datadir gethdata --port "30321" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w12" --allow-insecure-unlock --dev.period 1 --preload "/home/zc/20230203-treechain_expermiment/2childs/test_file/w12_1_addPeer.js" console