admin.addPeer("enode://3f72fd4828b1aba33ecdfa26b55efe4acf61c7e664161f3c7fda456acca1f11666d170e452f01d66ee5eefe0c79b66f7379d765d84b9b21d6995d6382de63314@127.0.0.1:30309")

sleep(10000)

eth.setBranchBlock({from:eth.accounts[0],branchid:"w11",settime:20})

sleep(10000)
miner.setEtherbase(eth.accounts[2])

//账户解锁
personal.unlockAccount(eth.accounts[0],"123",30000)
personal.unlockAccount(eth.accounts[1],"123",30000)
personal.unlockAccount(eth.accounts[2],"123",30000)
personal.unlockAccount(eth.accounts[3],"123",30000)
personal.unlockAccount(eth.accounts[4],"123",30000)
personal.unlockAccount(eth.accounts[5],"123",30000)
personal.unlockAccount(eth.accounts[6],"123",30000)
personal.unlockAccount(eth.accounts[7],"123",30000)
personal.unlockAccount(eth.accounts[8],"123",30000)
personal.unlockAccount(eth.accounts[9],"123",30000)
personal.unlockAccount(eth.accounts[10],"123",30000)
personal.unlockAccount(eth.accounts[11],"123",30000)
personal.unlockAccount(eth.accounts[12],"123",30000)

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
