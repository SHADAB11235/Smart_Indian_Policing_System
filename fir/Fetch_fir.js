if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];

var loginContract = web3.eth.contract([
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "FIRs",
		"outputs": [
			{
				"name": "firNo",
				"type": "uint256"
			},
			{
				"name": "occDate",
				"type": "string"
			},
			{
				"name": "occTime",
				"type": "string"
			},
			{
				"name": "compName",
				"type": "string"
			},
			{
				"name": "compAddress",
				"type": "string"
			},
			{
				"name": "compContact",
				"type": "string"
			},
			{
				"name": "accusedName",
				"type": "string"
			},
			{
				"name": "accusedAddress",
				"type": "string"
			},
			{
				"name": "incidentDetails",
				"type": "string"
			},
			{
				"name": "entryPoliceID",
				"type": "string"
			},
			{
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "firDetail",
		"outputs": [
			{
				"name": "firNo",
				"type": "uint256"
			},
			{
				"name": "occDate",
				"type": "string"
			},
			{
				"name": "occTime",
				"type": "string"
			},
			{
				"name": "compName",
				"type": "string"
			},
			{
				"name": "compAddress",
				"type": "string"
			},
			{
				"name": "compContact",
				"type": "string"
			},
			{
				"name": "accusedName",
				"type": "string"
			},
			{
				"name": "accusedAddress",
				"type": "string"
			},
			{
				"name": "incidentDetails",
				"type": "string"
			},
			{
				"name": "entryPoliceID",
				"type": "string"
			},
			{
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_firNo",
				"type": "uint256"
			}
		],
		"name": "getFirLength",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_firNo",
				"type": "uint256"
			},
			{
				"name": "_occDate",
				"type": "string"
			},
			{
				"name": "_occTime",
				"type": "string"
			},
			{
				"name": "_compName",
				"type": "string"
			},
			{
				"name": "_compAddress",
				"type": "string"
			},
			{
				"name": "_compContact",
				"type": "string"
			},
			{
				"name": "_accusedName",
				"type": "string"
			},
			{
				"name": "_accusedAddress",
				"type": "string"
			},
			{
				"name": "_incidentDetails",
				"type": "string"
			},
			{
				"name": "_entryPoliceID",
				"type": "string"
			}
		],
		"name": "addFIR",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_firNo",
				"type": "uint256"
			},
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getFirDetail",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]);

var l = loginContract.at('0xfec839895ef109ab5d22bb4f60274c7fb3e0d882');
console.log(l);
function submit()
{
    var firNo = document.getElementById("FirNo").value;
    l.getFirLength(firNo,function (error, result) {
        if (!error) {
            var n = parseInt(result);
            console.log(n);
            var x = prompt("There are " + n + " FIRs. Which one would you like to see?",n);
            if(x <1 || x > n){
              var x = prompt("Please Enter a valid value between 1 and "+ n);
            }
            l.getFirDetail(firNo, x-1, function (error, result) {
                if (!error) {
                    //console.log(result);
                    console.log(result);
                    document.getElementById("firNumber").innerHTML = firNo;
                    document.getElementById("occDate").innerHTML = (result[0]);
                    document.getElementById("occTime").innerHTML = (result[1]);
                    document.getElementById("compName").innerHTML = (result[2]);
                    document.getElementById("compAddress").innerHTML = (result[3]);
                    document.getElementById("compContact").innerHTML = (result[4]);
                    document.getElementById("accusedName").innerHTML = (result[5]);
                    document.getElementById("accusedAddress").innerHTML = (result[6]);
                    document.getElementById("incidentDescription").innerHTML = (result[7]);
                }
                else{
                  console.log("Error occured");
                }
            });
        }
        else{
          console.log("Error occured");
        }
    });

}
