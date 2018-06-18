if (typeof web3 !== 'undefined') {
     web3 = new Web3(web3.currentProvider);
}
else{
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
web3.eth.defaultAccount = web3.eth.accounts[0];
var CoursetroContract = web3.eth.contract([
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

var l = CoursetroContract.at('0xfec839895ef109ab5d22bb4f60274c7fb3e0d882');

console.log(l);

function submit(){
  firno = document.getElementById("firNUm").value;
  occDate = document.getElementById("occDate").value;
  occTime =  document.getElementById("occTime").value;
  compName = document.getElementById("compName").value;
  compAddress = document.getElementById("compAddress").value;
  compContact = document.getElementById("compContact").value;
  accusedName = document.getElementById("accName").value;
  accusedAddress = document.getElementById("accAddress").value;
  incidentDetails = document.getElementById("incidentDetails").value;
  l.addFIR( firno,occDate,occTime,compName,compAddress,compContact,accusedName,accusedAddress,incidentDetails,localStorage.getItem("userId"),{ from: web3.eth.accounts[0],gas: 3000000});
  window.location="../Login/profile.html";
}
