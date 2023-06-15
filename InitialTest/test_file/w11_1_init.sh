cd /home/zc/20230203-treechain_expermiment/2childs/geth_w11_1


/home/zc/go/src/github.com/ethereum/go-ethereum/build/bin/geth --identity "MyEth" --rpc --rpcport "8511" --rpccorsdomain "*" --datadir gethdata --port "30311" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w11" init genesisgtrie.json
/home/zc/go/src/github.com/ethereum/go-ethereum/build/bin/geth --identity "MyEth" --rpc --rpcport "8511" --rpccorsdomain "*" --datadir gethdata --port "30311" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w11" --allow-insecure-unlock --dev.period 1 --preload "/home/zc/20230203-treechain_expermiment/2childs/test_file/w11_1_addPeer.js" console
