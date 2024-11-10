//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

struct AMCRequest {
    address amc;
    address owner;
    address manager;
    uint16 commissionBP;
    string metadata;
}

interface IOrchestrator {
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
    event DepositMade(
        address indexed amc,
        address indexed token,
        uint256 amount
    );
    event WithdrawalMade(
        address indexed amc,
        address indexed token,
        uint256 amount
    );
    event TradeExecuted(
        address indexed amc,
        address indexed tokenIn,
        address indexed tokenOut,
        uint256 amountIn,
        uint256 amountOut
    );

    function logRequestAccepted() external;

    function logRequestRefused() external;

    function logRequestDeactivated() external;

    function logDeposit(address token, uint256 amount) external;

    function logWithdrawal(address token, uint256 amount) external;

    function logTrade(
        address tokenIn,
        address tokenOut,
        uint256 amountIn,
        uint256 amountOut
    ) external;
}
