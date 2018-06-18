pragma solidity ^0.4.18;
pragma experimental ABIEncoderV2;
contract FIR {

struct firDetails {
    uint firNo;
    string occDate;
    string occTime;
    string compName;
    string compAddress;
    string compContact;
    string accusedName;
    string accusedAddress;
    string incidentDetails;
    string entryPoliceID;
    uint256 timestamp;
  }

firDetails public firDetail;

mapping (uint => firDetails[] )public FIRs;

function addFIR(uint _firNo,string _occDate,
    string _occTime, string _compName, string _compAddress,
    string _compContact,string _accusedName, string _accusedAddress,
    string _incidentDetails,string _entryPoliceID) public{

      firDetail = firDetails(_firNo,_occDate,_occTime,_compName,_compAddress,
                                        _compContact, _accusedName, _accusedAddress,_incidentDetails,_entryPoliceID, now);
      FIRs[_firNo].push(firDetail);
}
function getFirDetail(uint _firNo,uint _index)view public returns(string,string,string,string,string,string,string,string,string,uint256){
    firDetail = FIRs[_firNo][_index];
    return (firDetail.occDate,firDetail.occTime,firDetail.compName,firDetail.compAddress,firDetail.compContact,
            firDetail.accusedName,firDetail.accusedAddress,firDetail.incidentDetails,firDetail.entryPoliceID, firDetail.timestamp);
}

function getFirLength(uint _firNo) public constant returns (uint256){
    return FIRs[_firNo].length;
}
}
