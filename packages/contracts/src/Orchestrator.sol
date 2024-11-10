//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./AMC.sol";
import "./interfaces/IOrchestrator.sol";

contract Orchestrator is IOrchestrator {
    // ISwapRouter public swapRouter;

    mapping(address => AMCRequest) public requests;

    mapping(string => address) public usernameMapping;
    mapping(address => string) public usernames;

    // constructor(ISwapRouter _swapRouter) {
    //     swapRouter = _swapRouter;
    // }

    constructor() {}

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
                usernameMapping[username]
                // , swapRouter
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

    function logDeposit(address token, uint256 amount) external {
        require(requests[msg.sender].amc != address(0), "AMC not found");
        emit DepositMade(msg.sender, token, amount);
    }

    function logWithdrawal(address token, uint256 amount) external {
        require(requests[msg.sender].amc != address(0), "AMC not found");
        emit WithdrawalMade(msg.sender, token, amount);
    }

    function logTrade(
        address tokenIn,
        address tokenOut,
        uint256 amountIn,
        uint256 amountOut
    ) external {
        require(requests[msg.sender].amc != address(0), "AMC not found");
        emit TradeExecuted(msg.sender, tokenIn, tokenOut, amountIn, amountOut);
    }
}
