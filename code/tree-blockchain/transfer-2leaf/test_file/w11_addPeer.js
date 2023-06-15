admin.addPeer("enode://610bc995c6e7c6bc921303b134521f2b87220f5a9d134cf4b76eaa3032bc87df0117c669ea08e0ceca474b42df81a3d91f0efa55ebad2fb93ec4b967cc69c2d8@127.0.0.1:30309")

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
