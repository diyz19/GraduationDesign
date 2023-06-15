var Web3 = require('web3');
var w1_web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8549"));
var w11_web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8511"));
var w12_web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8521"));

var macc1 = "0x12d0e4381ef94a70a49252e35b9a65fadd3872b9";
var macc2 = "0x95fcbbba05858b53b829361a052450179d7a62ca";
var macc3 = "0x59cadf05182c56784b60960159c0fb4d16860d10";
var macc4 = "0x4d326e5422c48ca1db8695bb59c9a58005a3fb44";
var macc5 = "0x1daf02e444bec7fc7fdbbac7704c57d001b19648";
var macc6 = "0xf41384cb20cd007daea6b0d7eefa3942ac44a3d1";
var macc7 = "0x8ed2d00a4ee496e51fab00ddc7561f85186e2a9c";
var macc8 = "0xcada164cb319316a133741dbaa1b40fcc8caec52";
var macc9 = "0x4461e120a1bcbdc9e08730f59c7e169bac5de38f";
var macc10 = "0x0b424be2eb61a4fa045161198754613a93845857";

var ama = "0x196424dd2bf7c978228ebd7a17b38b993d650696";

var accw11 = "0x456c4df0610c7611ae8bcaed32dd1d94e88ceca4";

// w11_web3.personal.unlockAccount(macc1,"123",30000)
// w11_web3.personal.unlockAccount(macc2,"123",30000)
// w11_web3.personal.unlockAccount(macc3,"123",30000)
// w11_web3.personal.unlockAccount(macc4,"123",30000)
// w11_web3.personal.unlockAccount(macc5,"123",30000)
// w11_web3.personal.unlockAccount(macc6,"123",30000)
// w11_web3.personal.unlockAccount(macc7,"123",30000)
// w11_web3.personal.unlockAccount(macc8,"123",30000)
// w11_web3.personal.unlockAccount(macc9,"123",30000)
// w11_web3.personal.unlockAccount(macc10,"123",30000)

//转初值
// w11_web3.eth.sendTransaction({from:accw11,to:macc5,value:2000,position:"w1155111111111",txtime:111},function(err,res){
//     if(err){
//       console.log("Error:",err);
//     }else{
//         }
// });
// w11_web3.eth.sendTransaction({from:accw11,to:macc6,value:2000,position:"w1155111111111",txtime:111},function(err,res){
//     if(err){
//       console.log("Error:",err);
//     }else{
//         }
// });
// w11_web3.eth.sendTransaction({from:accw11,to:macc7,value:2000,position:"w1155111111111",txtime:111},function(err,res){
//     if(err){
//       console.log("Error:",err);
//     }else{
//         }
// });
// w11_web3.eth.sendTransaction({from:accw11,to:macc8,value:2000,position:"w1155111111111",txtime:111},function(err,res){
//     if(err){
//       console.log("Error:",err);
//     }else{
//         }
// });
// w11_web3.eth.sendTransaction({from:accw11,to:macc9,value:2000,position:"w1155111111111",txtime:111},function(err,res){
//     if(err){
//       console.log("Error:",err);
//     }else{
//         }
// });
// w11_web3.eth.sendTransaction({from:accw11,to:macc10,value:2000,position:"w1155111111111",txtime:111},function(err,res){
//     if(err){
//       console.log("Error:",err);
//     }else{
//         }
// });

// w11_web3.eth.sendTransaction({from:macc10,to:ama,value:2000,position:"w1166111111111",txtype:1,txtime:666},function(err,res){
//     if(err){
//       console.log("Error:",err);
//     }else{
//         }
// });

var acc = "[89 202 223 5 24 44 86 120 75 96 150 1 89 192 251 77 22 134 13 16]"
var add_macc1 = "[89 202 223 5 24 44 86 120 75 96 150 1 89 192 251 77 22 134 13 16]"
var curacc;
switch (acc){
    case add_macc1:
        curacc = macc1;
        break;
}
console.log(curacc)