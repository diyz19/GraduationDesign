var Web3 = require('web3');
var w_web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8541"));
var w2_web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8542"));
var w3_web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8543"));

//accounts_manage_account
var ama = "0x196424dd2bf7c978228ebd7a17b38b993d650696";
//mobile_account
var macc1 = "0x12d0e4381ef94a70a49252e35b9a65fadd3872b9";
//w2_account
var accw2 = "0x456c4df0610c7611ae8bcaed32dd1d94e88ceca4";
//w3_account
var accw3 = "0x1dee886dee470f8e725c27061b55ad7e8619d92a";

//转移前准备-来源链中向移动账户转移资金-------------
console.log("balance_from_init:",w2_web3.eth.getBalance(macc1))
w2_web3.eth.sendTransaction({from:accw2,to:macc1,position:"w2455111111111",value:2000000000000000000,txtime:333},(err,res)=>{
	if(err){
	  console.log("beforetrans_Error:",err)	
	}else{
	  console.log("balance_from_beforetrans:",w2_web3.eth.getBalance(macc1))
	  //1. macc1在目标链w3发起位置写入交易Tx_common，没有余额无法写入
	  Tx_common_w3();
	}
});


//资产转移交易记录
var hash_req,hash_out,hash_in;

//1. macc1在目标链w3发起位置写入交易Tx_common，没有余额无法写入  value:w3_web3.toWei(1,"ether"),
function Tx_common_w3(){
w3_web3.eth.sendTransaction({from:macc1,to:accw3,position:"w3444111111111",txtime:444},(err,res)=>{
	if(err){
	  console.log("Error:",err);
	  //2. macc1在目标链w3发起资产转移请求交易Tx_request
	  Tx_request_w3();
	}else{
	  
    }
});
//查询余额,这时余额为0
	console.log("balance_to:",w3_web3.eth.getBalance(macc1))
	sleep(2000)
}

//2. macc1在目标链w3发起资产转移请求交易Tx_request
function Tx_request_w3(){
w3_web3.eth.sendTransaction({from:macc1,to:ama,position:"w3455111111111",txtype:1,txtime:555},(err,res)=>{
	if(err){
	  console.log("Error:",err);
	}else{
	  hash_req = w3_web3.toHex(res);
	  console.log("hash_req:",hash_req);
        }
});
sleep(2000)
}

//3. branchnode收到Tx_request,并获得来源链信息;macc1在来源链w2发起资产转出交易Tx_out
function get_outchain_info(acc,outchain){
var out_web3;

	var macc1_outbal;
	console.log("3--acc--"+acc)
	console.log("outchain:",outchain)
	if (outchain ==='w2'){
		macc1_outbal = w2_web3.eth.getBalance(macc1)
		w2_web3.eth.sendTransaction({from:macc1,to:ama,value:macc1_outbal,position:"w2455111111111",txtype:2,txtime:666,exdata:hash_req},(err,res)=>{
			if(err){
			  console.log("Error:",err);
			}else{
			  console.log("Result:",res);
			  hash_out = w2_web3.toHex(res);
			  //console.log("3-w2-hash_out:",hash_out);
			console.log("3-outchain_balance:",macc1_outbal)
			  send_inchain_tx(w2_web3,macc1,macc1_outbal,hash_out);
				}
		});
	}else if (outchain ==='w3') {
		macc1_outbal = w3_web3.eth.getBalance(acc)
		w3_web3.eth.sendTransaction({from:macc1,to:ama,value:macc1_outbal,position:"w2455111111111",txtype:2,txtime:666,exdata:hash_req},(err,res)=>{
			if(err){
			  console.log("Error:",err);
			}else{
			  console.log("Result:",res);
			  hash_out = w3_web3.toHex(res);
			  //console.log("3-w3-hash_out:",hash_out);
			  console.log("3-outchain_balance:",macc1_outbal)
			  send_inchain_tx(w3_web3,macc1,macc1_outbal,hash_out);
				}
		});
	} 
}
sleep(2000)

//4. ama在目标链w3发送资产转入交易Tx_in
function send_inchain_tx(outweb3,acc,inbal,txouthash){
	w3_web3.eth.sendTransaction({from:ama,to:acc,value:inbal,position:"w3455111111111",txtype:3,txtime:777,exdata:txouthash},(err,res)=>{
		if(err){
		  console.log("Error:",err);
		}else{
		  console.log("Result:",res);
		  hash_in = w3_web3.toHex(res);
		  console.log("4-hash_in:",hash_in);
		macc1_outbal = w3_web3.eth.getBalance(acc)
		  send_result_tx(outweb3,acc,true,hash_in);
		}
	});
}
sleep(2000)

//5. ama在来源链发送Tx_result交易
function send_result_tx(outweb3,acc,result,txinhash){
	if (result){
		outweb3.eth.sendTransaction({from:ama,to:acc,position:"w2455111111111",txtype:4,txtime:888,exdata:txinhash},(err,res)=>{
			if(err){
			  console.log("Error:",err);
			}else{
			  console.log("5-Tx_result:",res);
			}
		});
	}
}
sleep(2000)


function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}




module.exports = {get_outchain_info}


