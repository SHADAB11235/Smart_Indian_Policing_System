pragma solidity ^0.4.18;
pragma experimental ABIEncoderV2;
contract evidence{
    struct evidenceDetails {
    uint256 firNo;
    uint256 timestamp;
    bytes32 EntryPoliceId;
    bytes32 evidence_link;
    }
    evidenceDetails public evidence;
    mapping (uint256=>evidenceDetails[]) evidence_links;
    function getEvidenceLinks (uint256 fir,uint256 i) public constant returns (uint256,bytes32,bytes32){
        return (evidence_links[fir][i].timestamp,evidence_links[fir][i].EntryPoliceId,evidence_links[fir][i].evidence_link);
    }

    function addEvidence(uint256 fir ,bytes32 evidence_link,bytes32 EntryPoliceId )public  {
        uint256 timestamp = now;
        evidence = evidenceDetails(fir,timestamp,EntryPoliceId,evidence_link);
        evidence_links[fir].push(evidence);

    }

    function getEvidenceLength(uint256 fir) public constant returns(uint256){
        return evidence_links[fir].length;
    }
}
