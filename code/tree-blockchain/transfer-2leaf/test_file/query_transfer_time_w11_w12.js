var Web3 = require('web3');
//Geth_w11
var w11_web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8511"));
//Geth_w12
var w12_web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8521"));

var _from = "0xe66415b6ff01a70ce0f226954576f72fe7e2bc01";
var _to = "0x7125a92e01a5165e3c54065033a2dd30edabef38";

var _value = w11_web3.toWei(1,"ether");

var _position = "";
var _txtime=100;


function sleep(delay) {
    for(var t = Date.now(); Date.now() - t <= delay;);
}

//数据查询-------------------
//吞吐量计算相关
var blocknum_w11 = w11_web3.eth.blockNumber;
var blocknum_w12 = w12_web3.eth.blockNumber;
var curblock,curnum,curtype,curtime,txhash,curtx;

//写文件
var fs = require('fs');

function get_transfer_tx_w11(){
    console.log("blocknum_w11:",blocknum_w11);
    for(var i=0;i<blocknum_w11;i++){
        curblock = w11_web3.eth.getBlock(i);
        curnum = (curblock.transactions).length;
        curtime = curblock.timestamp;
        if (curnum > 0){
            for(var j=0;j < curnum;j++){
                txhash = curblock.transactions[j];
                curtx = w11_web3.eth.getTransaction(txhash);
                curtype = curtx.txtype;
                console.log("curtype:",curtype);
                if (curtype == "0x1"){
                    fs.appendFile("../result/tx_request_w11.txt",curtx.from.toString()+'	'+curtime.toString()+'\n',(error)=>{
                        if(error) return console.log("fail"+error.message);
                        console.log("tx_request success!!");
                    })
                }
                if (curtype == "0x4"){
                    fs.appendFile("../result/tx_result_w11.txt",curtx.to.toString()+'	'+curtime.toString()+'\n',(error)=>{
                        if(error) return console.log("fail"+error.message);
                        console.log("tx_result success!!");
                    })
                }
            }
        }
    }
}

function get_transfer_tx_w12(){
    console.log("blocknum_w12:",blocknum_w12);
    for(var i=0;i<blocknum_w12;i++){
        curblock = w12_web3.eth.getBlock(i);
        curnum = (curblock.transactions).length;
        curtime = curblock.timestamp;
        if (curnum > 0){
            for(var j=0;j < curnum;j++){
                txhash = curblock.transactions[j];
                curtx = w12_web3.eth.getTransaction(txhash);
                curtype = curtx.txtype;
                console.log("curtype:",curtype);
                if (curtype == "0x1"){
                    fs.appendFile("../result/tx_request_w12.txt",curtx.from.toString()+'	'+curtime.toString()+'\n',(error)=>{
                        if(error) return console.log("fail"+error.message);
                        console.log("tx_request success!!");
                    })
                }
                if (curtype == "0x4"){
                    fs.appendFile("../result/tx_result_w12.txt",curtx.to.toString()+'	'+curtime.toString()+'\n',(error)=>{
                        if(error) return console.log("fail"+error.message);
                        console.log("tx_result success!!");
                    })
                }
            }
        }
    }
}


get_transfer_tx_w11();
get_transfer_tx_w12();

