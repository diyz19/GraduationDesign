var Web3 = require('web3');
var w1_web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8549"));
var w11_web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8511"));
var w12_web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8521"));
// var w2_web3 = new Web3(new Web3.providers.WebsocketProvider("ws://localhost:8542"))

//accounts_manage_account
var ama = "0x196424dd2bf7c978228ebd7a17b38b993d650696";
//mobile_account
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

//mobile_account_add
var add_macc1 = '[18 208 228 56 30 249 74 112 164 146 82 227 91 154 101 250 221 56 114 185]';
var add_macc2 = '[149 252 187 186 5 133 139 83 184 41 54 26 5 36 80 23 157 122 98 202]';
var add_macc3 = '[89 202 223 5 24 44 86 120 75 96 150 1 89 192 251 77 22 134 13 16]';
var add_macc4 = '[77 50 110 84 34 196 140 161 219 134 149 187 89 201 165 128 5 163 251 68]';
var add_macc5 = '[29 175 2 228 68 190 199 252 127 219 186 199 112 76 87 208 1 177 150 72]';
var add_macc6 = '[244 19 132 203 32 205 0 125 174 166 176 215 238 250 57 66 172 68 163 209]';
var add_macc7 = '[142 210 208 10 78 228 150 229 31 171 0 221 199 86 31 133 24 110 42 156]';
var add_macc8 = '[202 218 22 76 179 25 49 106 19 55 65 219 170 27 64 252 200 202 236 82]';
var add_macc9 = '[68 97 225 32 161 188 189 201 224 135 48 245 156 126 22 155 172 93 227 143]';
var add_macc10 = '[11 66 75 226 235 97 164 250 4 81 97 25 135 84 97 58 147 132 88 87]';

//w11_account
var accw11 = "0x456c4df0610c7611ae8bcaed32dd1d94e88ceca4";
//w12_account
var accw12 = "0x1dee886dee470f8e725c27061b55ad7e8619d92a";

var starttime,endtime,curtime;

//转移前准备-来源链中向移动账户转移资金-------------
// function init_tx(){
// //10个账户,初始余额为0	
// for(i=1;i<11;i++){
// 	curmacc = "macc"+i.toString();
// 	console.log("balance_init_"+curmacc+":",w11_web3.eth.getBalance(curmacc))
// }


// // console.log("balance_init_macc1:",w11_web3.eth.getBalance(macc1))
// // console.log("balance_init_macc2:",w11_web3.eth.getBalance(macc2))
// // console.log("balance_init_macc3:",w11_web3.eth.getBalance(macc3))
// // console.log("balance_init_macc4:",w11_web3.eth.getBalance(macc4))
// // console.log("balance_init_macc5:",w11_web3.eth.getBalance(macc5))
// // console.log("balance_init_macc6:",w11_web3.eth.getBalance(macc6))
// // console.log("balance_init_macc7:",w11_web3.eth.getBalance(macc7))
// // console.log("balance_init_macc8:",w11_web3.eth.getBalance(macc8))
// // console.log("balance_init_macc9:",w11_web3.eth.getBalance(macc9))
// // console.log("balance_init_macc10:",w11_web3.eth.getBalance(macc10))


// 	// w11_web3.eth.sendTransaction({from:accw11,to:macc1,position:"w1122111111111",value:2000000000000000000,txtime:222},function(err,res){
// 	// 	if(err){
// 	// 	console.log("beforetrans_Error:",err)	
// 	// 	}else{
// 	// 	sleep(2000)
// 	// 	console.log("balance_from_beforetrans:",w2_web3.eth.getBalance(macc1))
// 	// 	//1. macc1在目标链w3发起位置写入交易Tx_common，没有余额无法写入
// 	// 	Tx_common_w3();
// 	// 	}
// 	// });
// }
// Tx_common_w3();
// //资产转移交易记录
var hash_req1,hash_req2,hash_req3,hash_req4,hash_req5,hash_req6,hash_req7,hash_req8,hash_req9,hash_req10;
var hash_out,hash_in;

//1. 第一次移动:移动账户在目标链w12发起位置写入交易Tx_common，没有余额无法写入  value:w3_web3.toWei(1,"ether")
function Tx_common_w12(){
	//移动账户在目标链发送普通交易,余额不足,未成功
w12_web3.eth.sendTransaction({from:macc1,to:accw12,position:"w1201111111111",txtime:1100},function(err,res){
	if(err){
	  //console.log("Error:",err);
	  console.log("!!macc1--insufficient funds for this tx--w12!!")
	}
});	
sleep(200)
//  w12_web3.eth.sendTransaction({from:macc2,to:accw12,position:"w1202111111111",txtime:1200},function(err,res){
//  	if(err){
//  	  //console.log("Error:",err);
//  	  console.log("!!macc2--insufficient funds for this tx--w12!!")
// 	}
//  });	
//  sleep(200)
// w12_web3.eth.sendTransaction({from:macc3,to:accw12,position:"w1203111111111",txtime:1300},function(err,res){
// 	if(err){
// 	  //console.log("Error:",err);
// 	  console.log("!!macc3--insufficient funds for this tx--w12!!")
// 	}
// });	
// sleep(200)
// w12_web3.eth.sendTransaction({from:macc4,to:accw12,position:"w1204111111111",txtime:1400},function(err,res){
// 	if(err){
// 	  //console.log("Error:",err);
// 	  console.log("!!macc4--insufficient funds for this tx--w12!!")
// 	}
// });	
// sleep(200)
// w12_web3.eth.sendTransaction({from:macc5,to:accw12,position:"w1205111111111",txtime:1500},function(err,res){
// 	if(err){
// 	  //console.log("Error:",err);
// 	  console.log("!!macc5--insufficient funds for this tx--w12!!")
// 	}
// });	
// sleep(200)
// w12_web3.eth.sendTransaction({from:macc6,to:accw12,position:"w1206111111111",txtime:1600},function(err,res){
// 	if(err){
// 	  //console.log("Error:",err);
// 	  console.log("!!macc6--insufficient funds for this tx--w12!!")
// 	}
// });	
// sleep(200)
// w12_web3.eth.sendTransaction({from:macc7,to:accw12,position:"w1207111111111",txtime:1700},function(err,res){
// 	if(err){
// 	  //console.log("Error:",err);
// 	  console.log("!!macc7--insufficient funds for this tx--w12!!")
// 	}
// });	
// sleep(200)
// w12_web3.eth.sendTransaction({from:macc8,to:accw12,position:"w1208111111111",txtime:1800},function(err,res){
// 	if(err){
// 	  //console.log("Error:",err);
// 	  console.log("!!macc8--insufficient funds for this tx--w12!!")
// 	}
// });	
// sleep(200)
// w12_web3.eth.sendTransaction({from:macc9,to:accw12,position:"w1209111111111",txtime:1900},function(err,res){
// 	if(err){
// 	  //console.log("Error:",err);
// 	  console.log("!!macc9--insufficient funds for this tx--w12!!")
// 	}
// });	
// sleep(200)
// w12_web3.eth.sendTransaction({from:macc10,to:accw12,position:"w1210111111111",txtime:2000},function(err,res){
// 	if(err){
// 	  //console.log("Error:",err);
// 	  console.log("!!macc10--insufficient funds for this tx--w12!!")
// 	}
// });	
// sleep(200)

//2. 第一次移动:移动账户在目标链w12发起资产转移请求交易Tx_request
Tx_request_w12();
}

function Tx_common_w12_single(){
	//移动账户在目标链发送普通交易,余额不足,未成功
w12_web3.eth.sendTransaction({from:macc1,to:accw12,position:"w1201111111111",txtime:1100},function(err,res){
	if(err){
	  //console.log("Error:",err);
	  console.log("!!macc1--insufficient funds for this tx--w12!!")
	}
});	
sleep(200)
 w12_web3.eth.sendTransaction({from:macc2,to:accw12,position:"w1202111111111",txtime:1200},function(err,res){
 	if(err){
 	  //console.log("Error:",err);
 	  console.log("!!macc2--insufficient funds for this tx--w12!!")
	}
 });	
 sleep(200)
w12_web3.eth.sendTransaction({from:macc3,to:accw12,position:"w1203111111111",txtime:1300},function(err,res){
	if(err){
	  //console.log("Error:",err);
	  console.log("!!macc3--insufficient funds for this tx--w12!!")
	}
});	
sleep(200)
w12_web3.eth.sendTransaction({from:macc4,to:accw12,position:"w1204111111111",txtime:1400},function(err,res){
	if(err){
	  //console.log("Error:",err);
	  console.log("!!macc4--insufficient funds for this tx--w12!!")
	}
});	
sleep(200)
w12_web3.eth.sendTransaction({from:macc5,to:accw12,position:"w1205111111111",txtime:1500},function(err,res){
	if(err){
	  //console.log("Error:",err);
	  console.log("!!macc5--insufficient funds for this tx--w12!!")
	}
});	
sleep(200)
w12_web3.eth.sendTransaction({from:macc6,to:accw12,position:"w1206111111111",txtime:1600},function(err,res){
	if(err){
	  //console.log("Error:",err);
	  console.log("!!macc6--insufficient funds for this tx--w12!!")
	}
});	
sleep(200)
w12_web3.eth.sendTransaction({from:macc7,to:accw12,position:"w1207111111111",txtime:1700},function(err,res){
	if(err){
	  //console.log("Error:",err);
	  console.log("!!macc7--insufficient funds for this tx--w12!!")
	}
});	
sleep(200)
w12_web3.eth.sendTransaction({from:macc8,to:accw12,position:"w1208111111111",txtime:1800},function(err,res){
	if(err){
	  //console.log("Error:",err);
	  console.log("!!macc8--insufficient funds for this tx--w12!!")
	}
});	
sleep(200)
w12_web3.eth.sendTransaction({from:macc9,to:accw12,position:"w1209111111111",txtime:1900},function(err,res){
	if(err){
	  //console.log("Error:",err);
	  console.log("!!macc9--insufficient funds for this tx--w12!!")
	}
});	
sleep(200)
w12_web3.eth.sendTransaction({from:macc10,to:accw12,position:"w1210111111111",txtime:2000},function(err,res){
	if(err){
	  //console.log("Error:",err);
	  console.log("!!macc10--insufficient funds for this tx--w12!!")
	}
});	
sleep(200)

//2. 第一次移动:移动账户在目标链w12发起资产转移请求交易Tx_request
Tx_request_w12_single();
}

function Tx_request_w12_single(){
	//查询余额,这时余额为0
	sleep(2000)
	// starttime = Date.now();
	w12_web3.eth.sendTransaction({from:macc1,to:ama,position:"w1211111111111",txtype:1,txtime:2100},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req1 = w12_web3.toHex(res);
		console.log("macc1_hash_req:",hash_req1);
			}
	});
	 w12_web3.eth.sendTransaction({from:macc2,to:ama,position:"w1212111111111",txtype:1,txtime:2200},function(err,res){
	 	if(err){
	 	console.log("Error:",err);
	 	}else{
	 	sleep(2000)
	 	hash_req2 = w12_web3.toHex(res);
	 	console.log("macc2_hash_req:",hash_req2);
	 		}
	 });
	w12_web3.eth.sendTransaction({from:macc3,to:ama,position:"w1213111111111",txtype:1,txtime:2300},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req3 = w12_web3.toHex(res);
		console.log("macc3_hash_req:",hash_req3);
			}
	});
	w12_web3.eth.sendTransaction({from:macc4,to:ama,position:"w1214111111111",txtype:1,txtime:2400},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req4 = w12_web3.toHex(res);
		console.log("macc4_hash_req:",hash_req4);
			}
	});
	w12_web3.eth.sendTransaction({from:macc5,to:ama,position:"w1215111111111",txtype:1,txtime:2500},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req5 = w12_web3.toHex(res);
		console.log("macc5_hash_req:",hash_req5);
			}
	});
	w12_web3.eth.sendTransaction({from:macc6,to:ama,position:"w1216111111111",txtype:1,txtime:2600},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req6 = w12_web3.toHex(res);
		console.log("macc6_hash_req:",hash_req6);
			}
	});
	w12_web3.eth.sendTransaction({from:macc7,to:ama,position:"w1217111111111",txtype:1,txtime:2700},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req7 = w12_web3.toHex(res);
		console.log("macc7_hash_req:",hash_req7);
			}
	});
	w12_web3.eth.sendTransaction({from:macc8,to:ama,position:"w1218111111111",txtype:1,txtime:2800},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req8 = w12_web3.toHex(res);
		console.log("macc8_hash_req:",hash_req8);
			}
	});
	w12_web3.eth.sendTransaction({from:macc9,to:ama,position:"w1219111111111",txtype:1,txtime:2900},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req9 = w12_web3.toHex(res);
		console.log("macc9_hash_req:",hash_req9);
			}
	});
	w12_web3.eth.sendTransaction({from:macc10,to:ama,position:"w1220111111111",txtype:1,txtime:3000},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req10 = w12_web3.toHex(res);
		console.log("macc10_hash_req:",hash_req10);
			}
	});
}

//2. 移动账户在目标链w12发起资产转移请求交易Tx_request
function Tx_request_w12(){
	//查询余额,这时余额为0
	sleep(2000)
	starttime = Date.now();
	w12_web3.eth.sendTransaction({from:macc1,to:ama,position:"w1211111111111",txtype:1,txtime:2100},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req1 = w12_web3.toHex(res);
		console.log("macc1_hash_req:",hash_req1);
			}
	});
	//  w12_web3.eth.sendTransaction({from:macc2,to:ama,position:"w1212111111111",txtype:1,txtime:2200},function(err,res){
	//  	if(err){
	//  	console.log("Error:",err);
	//  	}else{
	//  	sleep(2000)
	//  	hash_req2 = w12_web3.toHex(res);
	//  	console.log("macc2_hash_req:",hash_req2);
	//  		}
	//  });
	// w12_web3.eth.sendTransaction({from:macc3,to:ama,position:"w1213111111111",txtype:1,txtime:2300},function(err,res){
	// 	if(err){
	// 	console.log("Error:",err);
	// 	}else{
	// 	sleep(2000)
	// 	hash_req3 = w12_web3.toHex(res);
	// 	console.log("macc3_hash_req:",hash_req3);
	// 		}
	// });
	// w12_web3.eth.sendTransaction({from:macc4,to:ama,position:"w1214111111111",txtype:1,txtime:2400},function(err,res){
	// 	if(err){
	// 	console.log("Error:",err);
	// 	}else{
	// 	sleep(2000)
	// 	hash_req4 = w12_web3.toHex(res);
	// 	console.log("macc4_hash_req:",hash_req4);
	// 		}
	// });
	// w12_web3.eth.sendTransaction({from:macc5,to:ama,position:"w1215111111111",txtype:1,txtime:2500},function(err,res){
	// 	if(err){
	// 	console.log("Error:",err);
	// 	}else{
	// 	sleep(2000)
	// 	hash_req5 = w12_web3.toHex(res);
	// 	console.log("macc5_hash_req:",hash_req5);
	// 		}
	// });
	// w12_web3.eth.sendTransaction({from:macc6,to:ama,position:"w1216111111111",txtype:1,txtime:2600},function(err,res){
	// 	if(err){
	// 	console.log("Error:",err);
	// 	}else{
	// 	sleep(2000)
	// 	hash_req6 = w12_web3.toHex(res);
	// 	console.log("macc6_hash_req:",hash_req6);
	// 		}
	// });
	// w12_web3.eth.sendTransaction({from:macc7,to:ama,position:"w1217111111111",txtype:1,txtime:2700},function(err,res){
	// 	if(err){
	// 	console.log("Error:",err);
	// 	}else{
	// 	sleep(2000)
	// 	hash_req7 = w12_web3.toHex(res);
	// 	console.log("macc7_hash_req:",hash_req7);
	// 		}
	// });
	// w12_web3.eth.sendTransaction({from:macc8,to:ama,position:"w1218111111111",txtype:1,txtime:2800},function(err,res){
	// 	if(err){
	// 	console.log("Error:",err);
	// 	}else{
	// 	sleep(2000)
	// 	hash_req8 = w12_web3.toHex(res);
	// 	console.log("macc8_hash_req:",hash_req8);
	// 		}
	// });
	// w12_web3.eth.sendTransaction({from:macc9,to:ama,position:"w1219111111111",txtype:1,txtime:2900},function(err,res){
	// 	if(err){
	// 	console.log("Error:",err);
	// 	}else{
	// 	sleep(2000)
	// 	hash_req9 = w12_web3.toHex(res);
	// 	console.log("macc9_hash_req:",hash_req9);
	// 		}
	// });
	// w12_web3.eth.sendTransaction({from:macc10,to:ama,position:"w1220111111111",txtype:1,txtime:3000},function(err,res){
	// 	if(err){
	// 	console.log("Error:",err);
	// 	}else{
	// 	sleep(2000)
	// 	hash_req10 = w12_web3.toHex(res);
	// 	console.log("macc10_hash_req:",hash_req10);
	// 		}
	// });
}

// //3. branchnode收到Tx_request,并获得来源链信息;移动账户在来源链w11发起资产转出交易Tx_out
// function get_outchain_info(acc,outchain){
// var out_web3;

// 	var macc1_outbal;
// 	console.log("get_outchain_info--acc:",acc)
// 	console.log("get_outchain_info--outchain:",outchain)
// 	if (outchain ==='w2'){
// 		macc1_outbal = w2_web3.eth.getBalance(macc1)
// 		console.log("get_outchain_info--outchain_balance:",macc1_outbal)
// 		w2_web3.eth.sendTransaction({from:macc1,to:ama,value:macc1_outbal,position:"w2455111111111",txtype:2,txtime:666,exdata:hash_req},function(err,res){
// 			if(err){
// 			  console.log("Error:",err);
// 			}else{
// 				sleep(2000);
// 			  console.log("Result:",res);
// 			  hash_out = w2_web3.toHex(res);			
// 			  send_inchain_tx(w3_web3,macc1,macc1_outbal,hash_out);
// 				}
// 		});
// 	}else if (outchain ==='w3') {
// 		macc1_outbal = w3_web3.eth.getBalance(acc)
// 		w3_web3.eth.sendTransaction({from:macc1,to:ama,value:macc1_outbal,position:"w3455111111111",txtype:2,txtime:666,exdata:hash_req},function(err,res){
// 			if(err){
// 			  console.log("Error:",err);
// 			}else{
// 				sleep(2000);
// 			  console.log("Result:",res);
// 			  hash_out = w3_web3.toHex(res);
// 			  //console.log("3-w3-hash_out:",hash_out);
// 			  console.log("3-outchain_balance:",macc1_outbal)
// 			  send_inchain_tx(w2_web3,macc1,macc1_outbal,hash_out);
// 				}
// 		});
// 	} 
// }


//4. ama在目标链发送资产转入交易Tx_in
function send_inchain_tx(inweb3,acc,inbal,txouthash,inpos,outweb3,outpos){
	inweb3.eth.sendTransaction({from:ama,to:acc,value:inbal,position:inpos,txtype:3,txtime:777,exdata:txouthash},function(err,res){
		if(err){
		  console.log("Error:",err);
		}else{
		  sleep(2000)
		  console.log("send_inchain--Result:",res);
		  hash_in = inweb3.toHex(res);
		  console.log("send_inchain--hash_in:",hash_in);
		  sleep(2000)
		var macc1_inbal = inweb3.eth.getBalance(acc)
		console.log("send_inchain--balance:",macc1_inbal)
		  send_result_tx(outweb3,acc,true,hash_in,outpos);
		}
	});

}


//5. ama在来源链发送Tx_result交易
function send_result_tx(outweb3,acc,result,txinhash,outpos){
	if (result){
		outweb3.eth.sendTransaction({from:ama,to:acc,position:outpos,txtype:4,txtime:888,exdata:txinhash},function(err,res){
			if(err){
			  console.log("Error:",err);
			}else{
			  sleep(2000)
			  console.log("send_result--Tx_result:",res);
			  endtime =  new Date().getTime();
			  console.log("during--",endtime - starttime)
			}
		});
	}
}
//w12向11转移-------------------------------------
function Tx_common_w12tow11(){
	//移动账户在目标链发送普通交易,余额不足,未成功
	curtime =  new Date().getTime();
w11_web3.eth.sendTransaction({from:macc1,to:accw11,position:"w1121111111111",txtime:curtime},function(err,res){
	if(err){
	  //console.log("Error:",err);
	  console.log("!!macc1--insufficient funds for this tx--w11!!")
	}
});	
sleep(200)
curtime =  new Date().getTime();
 w11_web3.eth.sendTransaction({from:macc2,to:accw12,position:"w1122111111111",txtime:curtime},function(err,res){
 	if(err){
 	  //console.log("Error:",err);
 	  console.log("!!macc2--insufficient funds for this tx--w11!!")
	}
 });	
 sleep(200)
 curtime =  new Date().getTime();
w11_web3.eth.sendTransaction({from:macc3,to:accw12,position:"w1123111111111",txtime:curtime},function(err,res){
	if(err){
	  //console.log("Error:",err);
	  console.log("!!macc3--insufficient funds for this tx--w11!!")
	}
});	
sleep(200)
curtime =  new Date().getTime();
w11_web3.eth.sendTransaction({from:macc4,to:accw12,position:"w1124111111111",txtime:curtime},function(err,res){
	if(err){
	  //console.log("Error:",err);
	  console.log("!!macc4--insufficient funds for this tx--w11!!")
	}
});	
sleep(200)
curtime =  new Date().getTime();
w11_web3.eth.sendTransaction({from:macc5,to:accw12,position:"w1125111111111",txtime:curtime},function(err,res){
	if(err){
	  //console.log("Error:",err);
	  console.log("!!macc5--insufficient funds for this tx--w11!!")
	}
});	
sleep(200)
curtime =  new Date().getTime();
w11_web3.eth.sendTransaction({from:macc6,to:accw12,position:"w1126111111111",txtime:curtime},function(err,res){
	if(err){
	  //console.log("Error:",err);
	  console.log("!!macc6--insufficient funds for this tx--w11!!")
	}
});	
sleep(200)
curtime =  new Date().getTime();
w11_web3.eth.sendTransaction({from:macc7,to:accw12,position:"w1127111111111",txtime:curtime},function(err,res){
	if(err){
	  //console.log("Error:",err);
	  console.log("!!macc7--insufficient funds for this tx--w11!!")
	}
});	
sleep(200)
curtime =  new Date().getTime();
w11_web3.eth.sendTransaction({from:macc8,to:accw12,position:"w1128111111111",txtime:curtime},function(err,res){
	if(err){
	  //console.log("Error:",err);
	  console.log("!!macc8--insufficient funds for this tx--w11!!")
	}
});	
sleep(200)
curtime =  new Date().getTime();
w11_web3.eth.sendTransaction({from:macc9,to:accw12,position:"w1129111111111",txtime:curtime},function(err,res){
	if(err){
	  //console.log("Error:",err);
	  console.log("!!macc9--insufficient funds for this tx--w11!!")
	}
});	
sleep(200)
curtime =  new Date().getTime();
w11_web3.eth.sendTransaction({from:macc10,to:accw12,position:"w1130111111111",txtime:curtime},function(err,res){
	if(err){
	  //console.log("Error:",err);
	  console.log("!!macc10--insufficient funds for this tx--w11!!")
	}
});	
sleep(200)

//2. 第一次移动:移动账户在目标链w11发起资产转移请求交易Tx_request
Tx_request_w11_single();
}

function Tx_request_w11_single(){
	//查询余额,这时余额为0
	sleep(2000)
	curtime = Date.now();
	w11_web3.eth.sendTransaction({from:macc1,to:ama,position:"w1151111111111",txtype:1,txtime:curtime},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req1 = w11_web3.toHex(res);
		console.log("w11_macc1_hash_req:",hash_req1);
			}
	});
	 w11_web3.eth.sendTransaction({from:macc2,to:ama,position:"w1152111111111",txtype:1,txtime:curtime},function(err,res){
	 	if(err){
	 	console.log("Error:",err);
	 	}else{
	 	sleep(2000)
	 	hash_req2 = w11_web3.toHex(res);
	 	console.log("w11_macc2_hash_req:",hash_req2);
	 		}
	 });
	w11_web3.eth.sendTransaction({from:macc3,to:ama,position:"w1153111111111",txtype:1,txtime:curtime},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req3 = w11_web3.toHex(res);
		console.log("w11_macc3_hash_req:",hash_req3);
			}
	});
	w11_web3.eth.sendTransaction({from:macc4,to:ama,position:"w1154111111111",txtype:1,txtime:curtime},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req4 = w11_web3.toHex(res);
		console.log("w11_macc4_hash_req:",hash_req4);
			}
	});
	w11_web3.eth.sendTransaction({from:macc5,to:ama,position:"w1155111111111",txtype:1,txtime:curtime},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req5 = w11_web3.toHex(res);
		console.log("w11_macc5_hash_req:",hash_req5);
			}
	});
	w11_web3.eth.sendTransaction({from:macc6,to:ama,position:"w1156111111111",txtype:1,txtime:curtime},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req6 = w11_web3.toHex(res);
		console.log("w11_macc6_hash_req:",hash_req6);
			}
	});
	w11_web3.eth.sendTransaction({from:macc7,to:ama,position:"w1157111111111",txtype:1,txtime:curtime},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req7 = w11_web3.toHex(res);
		console.log("w11_macc7_hash_req:",hash_req7);
			}
	});
	w11_web3.eth.sendTransaction({from:macc8,to:ama,position:"w1158111111111",txtype:1,txtime:curtime},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req8 = w11_web3.toHex(res);
		console.log("w11_macc8_hash_req:",hash_req8);
			}
	});
	w11_web3.eth.sendTransaction({from:macc9,to:ama,position:"w1159111111111",txtype:1,txtime:curtime},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req9 = w11_web3.toHex(res);
		console.log("w11_macc9_hash_req:",hash_req9);
			}
	});
	w11_web3.eth.sendTransaction({from:macc10,to:ama,position:"w1160111111111",txtype:1,txtime:curtime},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req10 = w11_web3.toHex(res);
		console.log("w11_macc10_hash_req:",hash_req10);
			}
	});
}

function Tx_request_w12_single(){
	//查询余额,这时余额为0
	sleep(2000)
	curtime = Date.now();
	w12_web3.eth.sendTransaction({from:macc1,to:ama,position:"w1241111111111",txtype:1,txtime:curtime},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req1 = w12_web3.toHex(res);
		console.log("w12_macc1_hash_req:",hash_req1);
			}
	});
	 w12_web3.eth.sendTransaction({from:macc2,to:ama,position:"w1242111111111",txtype:1,txtime:curtime},function(err,res){
	 	if(err){
	 	console.log("Error:",err);
	 	}else{
	 	sleep(2000)
	 	hash_req2 = w12_web3.toHex(res);
	 	console.log("w12_macc2_hash_req:",hash_req2);
	 		}
	 });
	w12_web3.eth.sendTransaction({from:macc3,to:ama,position:"w1243111111111",txtype:1,txtime:curtime},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req3 = w12_web3.toHex(res);
		console.log("w12_macc3_hash_req:",hash_req3);
			}
	});
	w12_web3.eth.sendTransaction({from:macc4,to:ama,position:"w1244111111111",txtype:1,txtime:curtime},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req4 = w12_web3.toHex(res);
		console.log("w12_macc4_hash_req:",hash_req4);
			}
	});
	w12_web3.eth.sendTransaction({from:macc5,to:ama,position:"w1245111111111",txtype:1,txtime:curtime},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req5 = w12_web3.toHex(res);
		console.log("w12_macc5_hash_req:",hash_req5);
			}
	});
	w12_web3.eth.sendTransaction({from:macc6,to:ama,position:"w1246111111111",txtype:1,txtime:curtime},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req6 = w12_web3.toHex(res);
		console.log("w12_macc6_hash_req:",hash_req6);
			}
	});
	w12_web3.eth.sendTransaction({from:macc7,to:ama,position:"w1247111111111",txtype:1,txtime:curtime},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req7 = w12_web3.toHex(res);
		console.log("w12_macc7_hash_req:",hash_req7);
			}
	});
	w12_web3.eth.sendTransaction({from:macc8,to:ama,position:"w1248111111111",txtype:1,txtime:curtime},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req8 = w12_web3.toHex(res);
		console.log("w12_macc8_hash_req:",hash_req8);
			}
	});
	w12_web3.eth.sendTransaction({from:macc9,to:ama,position:"w1249111111111",txtype:1,txtime:curtime},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req9 = w12_web3.toHex(res);
		console.log("w12_macc9_hash_req:",hash_req9);
			}
	});
	w12_web3.eth.sendTransaction({from:macc10,to:ama,position:"w1250111111111",txtype:1,txtime:curtime},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req10 = w12_web3.toHex(res);
		console.log("w12_macc10_hash_req:",hash_req10);
			}
	});
}



function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

exports.init_tx = function(){
	//10个账户,初始余额为0	
	console.log("balance_init_macc1:",w11_web3.eth.getBalance(macc1))
	console.log("balance_init_macc2:",w11_web3.eth.getBalance(macc2))
	console.log("balance_init_macc3:",w11_web3.eth.getBalance(macc3))
	console.log("balance_init_macc4:",w11_web3.eth.getBalance(macc4))
	console.log("balance_init_macc5:",w11_web3.eth.getBalance(macc5))
	console.log("balance_init_macc6:",w11_web3.eth.getBalance(macc6))
	console.log("balance_init_macc7:",w11_web3.eth.getBalance(macc7))
	console.log("balance_init_macc8:",w11_web3.eth.getBalance(macc8))
	console.log("balance_init_macc9:",w11_web3.eth.getBalance(macc9))
	console.log("balance_init_macc10:",w11_web3.eth.getBalance(macc10))

//10个账户,转入余额10000
	w11_web3.eth.sendTransaction({from:accw11,to:macc1,position:"w1101111111111",value:10000,txtime:100},function(err,res){
		if(err){
		console.log("macc1_beforetrans_Error:",err)	
		}else{
		sleep(2000)
		// console.log("balance_from_beforetrans:",w2_web3.eth.getBalance(macc1))
		//1. macc1在目标链w3发起位置写入交易Tx_common，没有余额无法写入
		// Tx_common_w3();
		}
	});
	w11_web3.eth.sendTransaction({from:accw11,to:macc2,position:"w1102111111111",value:10000,txtime:200},function(err,res){
		if(err){
		console.log("macc2_beforetrans_Error:",err)	
		}else{
		sleep(2000)
		// console.log("balance_from_beforetrans:",w2_web3.eth.getBalance(macc1))
		//1. macc1在目标链w3发起位置写入交易Tx_common，没有余额无法写入
		// Tx_common_w3();
		}
	});
	w11_web3.eth.sendTransaction({from:accw11,to:macc3,position:"w1103111111111",value:10000,txtime:300},function(err,res){
		if(err){
		console.log("macc3_beforetrans_Error:",err)	
		}else{
		sleep(2000)
		// console.log("balance_from_beforetrans:",w2_web3.eth.getBalance(macc1))
		//1. macc1在目标链w3发起位置写入交易Tx_common，没有余额无法写入
		// Tx_common_w3();
		}
	});
	w11_web3.eth.sendTransaction({from:accw11,to:macc4,position:"w1104111111111",value:10000,txtime:400},function(err,res){
		if(err){
		console.log("macc4_beforetrans_Error:",err)	
		}else{
		sleep(2000)
		// console.log("balance_from_beforetrans:",w2_web3.eth.getBalance(macc1))
		//1. macc1在目标链w3发起位置写入交易Tx_common，没有余额无法写入
		// Tx_common_w3();
		}
	});
	w11_web3.eth.sendTransaction({from:accw11,to:macc5,position:"w1105111111111",value:10000,txtime:500},function(err,res){
		if(err){
		console.log("macc5_beforetrans_Error:",err)	
		}else{
		sleep(2000)
		// console.log("balance_from_beforetrans:",w2_web3.eth.getBalance(macc1))
		//1. macc1在目标链w3发起位置写入交易Tx_common，没有余额无法写入
		// Tx_common_w3();
		}
	});
	w11_web3.eth.sendTransaction({from:accw11,to:macc6,position:"w1106111111111",value:10000,txtime:600},function(err,res){
		if(err){
		console.log("macc6_beforetrans_Error:",err)	
		}else{
		sleep(2000)
		// console.log("balance_from_beforetrans:",w2_web3.eth.getBalance(macc1))
		//1. macc1在目标链w3发起位置写入交易Tx_common，没有余额无法写入
		// Tx_common_w3();
		}
	});
	w11_web3.eth.sendTransaction({from:accw11,to:macc7,position:"w1107111111111",value:10000,txtime:700},function(err,res){
		if(err){
		console.log("macc7_beforetrans_Error:",err)	
		}else{
		sleep(2000)
		// console.log("balance_from_beforetrans:",w2_web3.eth.getBalance(macc1))
		//1. macc1在目标链w3发起位置写入交易Tx_common，没有余额无法写入
		// Tx_common_w3();
		}
	});
	w11_web3.eth.sendTransaction({from:accw11,to:macc8,position:"w1108111111111",value:10000,txtime:800},function(err,res){
		if(err){
		console.log("macc8_beforetrans_Error:",err)	
		}else{
		sleep(2000)
		// console.log("balance_from_beforetrans:",w2_web3.eth.getBalance(macc1))
		//1. macc1在目标链w3发起位置写入交易Tx_common，没有余额无法写入
		// Tx_common_w3();
		}
	});
	w11_web3.eth.sendTransaction({from:accw11,to:macc9,position:"w1109111111111",value:10000,txtime:900},function(err,res){
		if(err){
		console.log("macc9_beforetrans_Error:",err)	
		}else{
		sleep(2000)
		// console.log("balance_from_beforetrans:",w2_web3.eth.getBalance(macc1))
		//1. macc1在目标链w3发起位置写入交易Tx_common，没有余额无法写入
		// Tx_common_w3();
		}
	});
	w11_web3.eth.sendTransaction({from:accw11,to:macc10,position:"w1110111111111",value:10000,txtime:1000},function(err,res){
		if(err){
		console.log("macc10_beforetrans_Error:",err)	
		}else{
		sleep(2000)
		// console.log("balance_from_beforetrans:",w2_web3.eth.getBalance(macc1))
		//1. macc1在目标链w3发起位置写入交易Tx_common，没有余额无法写入
		// Tx_common_w3();
		}
	});

	//10个账户,余额为10000	
	console.log("balance_beforetrans_macc1:",w11_web3.eth.getBalance(macc1))
	console.log("balance_beforetrans_macc2:",w11_web3.eth.getBalance(macc2))
	console.log("balance_beforetrans_macc3:",w11_web3.eth.getBalance(macc3))
	console.log("balance_beforetrans_macc4:",w11_web3.eth.getBalance(macc4))
	console.log("balance_beforetrans_macc5:",w11_web3.eth.getBalance(macc5))
	console.log("balance_beforetrans_macc6:",w11_web3.eth.getBalance(macc6))
	console.log("balance_beforetrans_macc7:",w11_web3.eth.getBalance(macc7))
	console.log("balance_beforetrans_macc8:",w11_web3.eth.getBalance(macc8))
	console.log("balance_beforetrans_macc9:",w11_web3.eth.getBalance(macc9))
	console.log("balance_beforetrans_macc10:",w11_web3.eth.getBalance(macc10))

	//1. 移动账户在目标链w12发起位置写入交易Tx_common，没有余额无法写入
	//  Tx_common_w12();
}

exports.trans_tx = function(){
	//1. 移动账户在目标链w12发起位置写入交易Tx_common，没有余额无法写入
	//  Tx_common_w12();
	Tx_common_w12_single();
}

exports.trans_tx_w11tow12 = function(){
	//1. 移动账户在目标链w12发起位置写入交易Tx_common，没有余额无法写入
	Tx_common_w12_single();
}

exports.trans_tx_w12tow11 = function(){
	//1. 移动账户在目标链w12发起位置写入交易Tx_common，没有余额无法写入
	Tx_common_w12tow11();
}

//3. branchnode收到Tx_request,并获得来源链信息;移动账户在来源链w11发起资产转出交易Tx_out
// module.exports = {get_outchain_info}
exports.get_outchain_info = function(acc,outchain){
	var out_web3,curacc,macc_outbal;
		
		console.log("get_outchain_info--acc:",acc)
		console.log("get_outchain_info--outchain:",outchain)

		switch (acc){
			case add_macc1:
				curacc = macc1;
				hash_req = hash_req1;
				break;
			case add_macc2:
				curacc = macc2;
				hash_req = hash_req2;
				break;
			case add_macc3:
				curacc = macc3;
				hash_req = hash_req3;
				break;
			case add_macc4:
				curacc = macc4;
				hash_req = hash_req4;
				break;
			case add_macc5:
				curacc = macc5;
				hash_req = hash_req5;
				break;
			case add_macc6:
				curacc = macc6;
				hash_req = hash_req6;
				break;
			case add_macc7:
				curacc = macc7;
				hash_req = hash_req7;
				break;
			case add_macc8:
				curacc = macc8;
				hash_req = hash_req8;
				break;
			case add_macc9:
				curacc = macc9;
				hash_req = hash_req9;
				break;
			case add_macc10:
				curacc = macc10;
				hash_req = hash_req10;
				break;
		}


		if (outchain ==='w11'){
			console.log("curacc:",curacc)
			macc_outbal = w11_web3.eth.getBalance(curacc)
			console.log("get_outchain_info--outchain_balance:",macc_outbal)
			w11_web3.eth.sendTransaction({from:curacc,to:ama,value:macc_outbal,position:"w1155111111111",txtype:2,txtime:666,exdata:hash_req},function(err,res){
				if(err){
				  console.log("Error:",err);
				}else{
					sleep(2000);
				  console.log("Result:",res);
				  hash_out = w11_web3.toHex(res);			
				  send_inchain_tx(w12_web3,curacc,macc_outbal,hash_out,"w1266111111111",w11_web3,"w1177111111111");
					}
			});
		}else if (outchain ==='w12') {
			console.log("curacc:",curacc)
			macc_outbal = w12_web3.eth.getBalance(curacc)
			w12_web3.eth.sendTransaction({from:curacc,to:ama,value:macc_outbal,position:"w1255111111111",txtype:2,txtime:666,exdata:hash_req},function(err,res){
				if(err){
				  console.log("Error:",err);
				}else{
					sleep(2000);
				  console.log("Result:",res);
				  hash_out = w12_web3.toHex(res);
				  //console.log("3-w3-hash_out:",hash_out);
				  console.log("3-outchain_balance:",macc_outbal)
				  send_inchain_tx(w11_web3,macc,macc_outbal,hash_out,"w1166111111111",w12_web3,"w1277111111111");
					}
			});
		} 
	}



