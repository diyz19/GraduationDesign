//添加w1
admin.addPeer("enode://bf50a0653a258cd3938283a7432497f55d82473a8e59c49c2dc4c3380e3763a90031f1e716b780fdbd607696e84916989339beeebbf2c5b907d7bcb40366d0b2@127.0.0.1:30309")

sleep(10000)

eth.setBranchBlock({from:eth.accounts[0],branchid:"w12",settime:20})

sleep(10000)

//账户解锁
personal.unlockAccount(eth.accounts[0],"123",3000)
//personal.unlockAccount(eth.accounts[1],"123",3000)
//personal.unlockAccount(eth.accounts[2],"123",3000)
//personal.unlockAccount(eth.accounts[3],"123",3000)

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
