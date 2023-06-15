cd /home/dyz/20230203-treechain_expermiment/2childs/geth_w1


#正常版本
/home/dyz/go/src/github.com/ethereum/go-ethereum/build/bin/geth --identity "MyEth" --rpc --rpcport "8549" --rpccorsdomain "*" --datadir gethdata --port "30309" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w1" init genesisgtrie.json
##无log
/home/dyz/go/src/github.com/ethereum/go-ethereum/build/bin/geth --identity "MyEth" --rpc --rpcport "8549" --rpccorsdomain "*" --datadir gethdata --port "30309" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w1" --syncmode "branch" --allow-insecure-unlock --dev.period 1 --preload "/home/zc/20230203-treechain_expermiment/2childs/test_file/w1_setbranch.js" console

