admin.addPeer("enode://2a05aa52178b9f603762ee5aab4020037490384d01f18b19d7d66bb8614853e4d8ea35af5545351c2d3ee92cf2ce0f5046043a8d5178f38f970d9d395664739d@127.0.0.1:30309")

sleep(10000)

eth.setBranchBlock({from:eth.accounts[0],branchid:"w11",settime:20})

sleep(10000)
//miner.setEtherbase(eth.accounts[0])

//账户解锁
personal.unlockAccount(eth.accounts[0],"123",3000)
//personal.unlockAccount(eth.accounts[1],"123",3000)
//personal.unlockAccount(eth.accounts[2],"123",3000)
//personal.unlockAccount(eth.accounts[3],"123",3000)

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
