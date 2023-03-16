admin.addPeer("enode://0764b601a00572788dcc8b95f627d972f2fd010e74bcfa278ba4ae70245dec576a8a642a0e9487eb3318f916056033a3c81aadf29e16e18c92064c26581f119e@127.0.0.1:30301?discport=0")

sleep(10000)

eth.setBranchBlock({from:eth.accounts[2],branchid:"w3",settime:30})

sleep(10000)
miner.setEtherbase(eth.accounts[2])

//账户解锁
personal.unlockAccount(eth.accounts[0],"123",3000)
personal.unlockAccount(eth.accounts[1],"123",3000)
personal.unlockAccount(eth.accounts[2],"123",3000)
personal.unlockAccount(eth.accounts[3],"123",3000)

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
