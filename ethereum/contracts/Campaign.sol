pragma solidity ^0.4.25;

/* Factory to create campaigns
 add extra security and keep track of deployed contracts
 **/
contract CampaignFactory {
    //addresses of deployed instances of campaigns
    address[] public deployedCampaigns;

    function CreateCampaign(uint minimum) public {

        address newCampaign = new Campaign(minimum, msg.sender);    //passes the actual address of who is creating the new campaign

        deployedCampaigns.push(newCampaign);

    }


    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }

}


/*Crowdfunding contract campaign Kikstarter solution*/

contract Campaign {

    struct Request {
        //why the request was been created
        string description;

        //amount of money the manager whants to send the vendor
         uint value;

        //address the money will be sent to
        address recipient;

        //true if the request has already been processed (money sent)
        bool complete;

        //total of yes votes
        uint approvalCount;

        //track of who has voted
         mapping(address => bool) approvals;
    }

    //lis the requests the manager has created
    Request[] public requests;

    // the campaign's manager
    address public manager;

    //minimum donation required to be considered to be a contributor or approver
    uint public minimumContribution;

    //addresses of the people who has donated money
    mapping(address => bool) public approvers;

    uint public approversCount;

    //function modifiers to restric functions:
    modifier restricted() {
        require(msg.sender == manager);
        _; //target for sticking code of the other functions internally by the compiler
    }

    constructor (uint minimum, address creator) public payable {   /* invoked automatically when deployed to the blockchain */
      manager = creator;     //msg is a global variable created when a transaction is send
      minimumContribution = minimum;
    }

    //when someone whants to donate and become an approvers (send money to the constract)
    function contribute() public payable {
        //the value sent must be higher than the minimum
        require(msg.value > minimumContribution);

        //add sender's address to the mapping and initialize as true (has donated money)
        approvers[msg.sender] = true;

        approversCount++;
    }


    //invoked by an external account, but only the manager can execute (restricted)
    //creates a new Request and add it to the array
    function createRequest(string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({   //memory: variable content is stored at memory
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0    //reference types are not needed to initialize
        });

        requests.push(newRequest);
    }

    //Called by each contributor to approve a spending request
    function approveRequest(uint index) {

        Request storage request = requests[index];

        //check if is a donator
        require(approvers[msg.sender]);

        //check if the person has not already voted
        require(!request.approvals[msg.sender]);

        //approve
        request.approvals[msg.sender] = true;
        request.approvalCount++;

    }

    //after a request has gotten enough approvals, the manager can call this to get the money sent to the vendor
    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];

        //check if the total number of yes votes is at least 50% of the number of approvers
        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);

        //transfer the money
        request.recipient.transfer(request.value);

        //mark as finalized to prevent multiple transfers for the same request
        request.complete = true;
    }

}
