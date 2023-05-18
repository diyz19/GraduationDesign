admin.addPeer("enode://10a5d4f5cc9deb59e08bc9b40517c7ac90138982c0757c9478cb9f73d33ef0a94abea4738f7babd2d8f188efaa332d1faf1dce3293f797abc1876aa4934dc800@127.0.0.1:30309?discport=0")

// sleep(10000)

eth.setBranchBlock({from:eth.accounts[0],branchid:"wx4ep",settime:20})

var MAP_NAME = "wx4ep";

// sleep(10000)

// 账户解锁
for (var i = 0; i < 12; i++) {
    personal.unlockAccount(eth.accounts[i],"123",30000)
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
