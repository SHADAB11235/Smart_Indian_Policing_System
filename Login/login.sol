pragma solidity ^0.4.18;
contract login {
    struct userDetails{
        string userId;
        string password;
        string name;
        string id;
        string contact;
        string postalAddress;
        string uid;
        string policeStationNo;
    }
    string superUserName = "20154032";
    string superUserPass = "20154032";

    //string gupta;
    mapping(string=>userDetails) details;

    function setDataBase(string _userId,string _pass,string _name,string _id,string _contact,string _postalAddress,string _uid,string _policeStationNo) public{
       //details[_userId]=userDetails("aman","aman","aman","12","8859647886","tandon hostel mnnit","20155018","526");
        details[_userId] = userDetails(_userId, _pass, _name, _id, _contact, _postalAddress, _uid, _policeStationNo);
    }

   function getName(string userId) public constant returns (string) {
       return details[userId].name;
   }
   function getId(string userId) public constant returns (string) {
       return details[userId].id;
   }
   function getContact(string userId) public constant returns (string) {
       return details[userId].contact;
   }
   function getPostalAddress(string userId) public constant returns (string) {
       return details[userId].postalAddress;
   }
   function getUid(string userId) public constant returns (string){
       return details[userId].uid;
   }
   function getPoliceStationNo(string userId) public constant returns (string){
       return details[userId].policeStationNo;
   }

   function setContact(string _contact,string userId) public {
       details[userId].contact=_contact;
   }

   function setPostalAddress(string _postalAddress,string userId) public {
      details[userId].postalAddress=_postalAddress;
   }

   function setPoliceStation(string _policeStationNo,string userId) public {
       details[userId].policeStationNo=_policeStationNo;
   }

    function loginVerify(string userId,string _password) public view returns (bool){
        //return details[userId].password;
        if(keccak256(details[userId].password) == keccak256(_password)){
            return true;
        }

        else{
            return false;
        }
    }

    function verifySuperUser(string _superUserName, string _superUserPass)public view returns (bool){
        if(keccak256(superUserName) == keccak256(_superUserName)){

            if (keccak256(superUserPass) == keccak256(_superUserPass))
                return true;
            else
                return false;
        }

        else{
            return false;
        }
    }

}
