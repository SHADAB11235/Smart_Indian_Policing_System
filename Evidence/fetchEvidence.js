if (typeof web3 !== 'undefined') {
     web3 = new Web3(web3.currentProvider);
}
else{
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
web3.eth.defaultAccount = web3.eth.accounts[0];
var CoursetroContract = web3.eth.contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "fir",
				"type": "uint256"
			},
			{
				"name": "evidence_link",
				"type": "string"
			},
			{
				"name": "EntryPoliceId",
				"type": "string"
			}
		],
		"name": "addEvidence",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "evidence",
		"outputs": [
			{
				"name": "firNo",
				"type": "uint256"
			},
			{
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"name": "EntryPoliceId",
				"type": "string"
			},
			{
				"name": "evidence_link",
				"type": "string"
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
				"name": "fir",
				"type": "uint256"
			}
		],
		"name": "getEvidenceLength",
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
		"constant": true,
		"inputs": [
			{
				"name": "fir",
				"type": "uint256"
			},
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getEvidenceLinks",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]);
var Coursetro = CoursetroContract.at('0x7ee76875826c593f972bce6fc7af26631cd26f68');

console.log(Coursetro);

function upload() {

      var rows;

      Coursetro.getEvidenceLength(document.getElementById("firNo").value,function(error, result){
                  if(!error)
                      {

                          rows = parseInt(result);
                          if(0<rows)
                          console.log('yes');
                          for(var i = 0 ;i<rows;i++){
                            console.log(i);
                            Coursetro.getEvidenceLinks(document.getElementById("firNo").value,i,function(error, result){
                                        if(!error)
                                            {
                                                console.log(result);
                                                var table = document.getElementById('evidenceTable');
                                                var newRow = table.insertRow(table.length),
                                                cell1 = newRow.insertCell(0),
                                                cell2 = newRow.insertCell(1),
                                                cell3 = newRow.insertCell(2);
                                                cell1.innerHTML = '<a href='+result[2]+' target="_blank">' + 'GO' + '</a>';
                                                cell2.innerHTML = result[1];
                                                cell3.innerHTML = result[0];
                                            }
                                        else
                                            console.error(error);
                            });
                          }
                      }
                  else
                      console.error(error);
      });

}
