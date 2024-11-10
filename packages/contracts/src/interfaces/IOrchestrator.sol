//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

interface IOrchestrator {
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
