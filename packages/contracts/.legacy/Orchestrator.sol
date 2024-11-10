//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./AMC.sol";
import "./interfaces/IOrchestrator.sol";

contract Orchestrator is IOrchestrator {
    struct AMCRequest {
        address amc;
        address owner;
        address manager;
        uint16 commissionBP;
        string metadata;
    }

    mapping(string => address) public usernameMapping;
    mapping(address => string) public usernames;

    mapping(address => AMCRequest) public requests;

    event RequestCreated(
        address indexed amc,
        address indexed owner,
        address indexed manager,
        uint16 commissionBP,
        string metadata
    );
    event RequestAccepted(
        address indexed amc,
        address indexed owner,
        address indexed manager
    );
    event RequestRefused(
        address indexed amc,
        address indexed owner,
        address indexed manager
    );
    event RequestDeactivated(
        address indexed amc,
        address indexed owner,
        address indexed manager
    );

    ISwapRouter public swapRouter;

    constructor(ISwapRouter _swapRouter) {
        swapRouter = _swapRouter;
    }

    function register(string calldata username) public {
        require(
            usernameMapping[username] == address(0),
            "Username already taken"
        );
        require(bytes(usernames[msg.sender]).length == 0, "Already registered");

        usernameMapping[username] = msg.sender;
        usernames[msg.sender] = username;
    }

    function createRequest(
        string calldata username,
        uint16 commissionBP,
        string calldata _metadata
    ) public returns (address amc) {
        // check if user is registered
        require(bytes(username).length > 0, "Username cannot be empty");
        require(usernameMapping[username] != address(0), "User not registered");
        require(
            keccak256(bytes(usernames[msg.sender])) !=
                keccak256(bytes(username)),
            "User cannot create request for self"
        );

        amc = address(
            new AMC(
                commissionBP,
                _metadata,
                msg.sender,
                usernameMapping[username],
                swapRouter
            )
        );

        requests[amc] = AMCRequest({
            amc: amc,
            owner: msg.sender,
            manager: usernameMapping[username],
            commissionBP: commissionBP,
            metadata: _metadata
        });

        emit RequestCreated(
            amc,
            msg.sender,
            usernameMapping[username],
            commissionBP,
            _metadata
        );
    }

    function logRequestAccepted() external {
        require(requests[msg.sender].amc != address(0), "No request found");
        emit RequestAccepted(
            requests[msg.sender].amc,
            requests[msg.sender].owner,
            requests[msg.sender].manager
        );
    }

    function logRequestRefused() external {
        require(requests[msg.sender].amc != address(0), "No request found");
        emit RequestRefused(
            requests[msg.sender].amc,
            requests[msg.sender].owner,
            requests[msg.sender].manager
        );
    }

    function logRequestDeactivated() external {
        require(requests[msg.sender].amc != address(0), "No request found");
        emit RequestDeactivated(
            requests[msg.sender].amc,
            requests[msg.sender].owner,
            requests[msg.sender].manager
        );
    }
}
