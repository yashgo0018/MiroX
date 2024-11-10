//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";
import "./interfaces/IOrchestrator.sol";

enum AMC_Status {
    PROPOSED,
    REJECTED,
    ACTIVE,
    DEACTIVATED
}

// Asset Management Contract
contract AMC {
    AMC_Status public status;
    uint16 public commissionBps;
    string public metadata;
    address public owner;
    address public manager;
    IOrchestrator public orchestrator;
    // ISwapRouter public swapRouter;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the Owner");
        _;
    }

    modifier onlyManager() {
        require(msg.sender == manager, "Not the Manager");
        _;
    }

    modifier onlyAuthorized() {
        require(msg.sender == owner || msg.sender == manager, "Not authorized");
        _;
    }

    modifier whenActive() {
        require(status == AMC_Status.ACTIVE, "AMC is not active");
        _;
    }

    constructor(
        uint16 _commissionBps,
        string memory _metadata,
        address _owner,
        address _manager
    ) // , ISwapRouter _swapRouter
    {
        // swapRouter = _swapRouter;
        status = AMC_Status.PROPOSED;
        commissionBps = _commissionBps;
        metadata = _metadata;
        owner = _owner;
        manager = _manager;
        orchestrator = IOrchestrator(msg.sender);
    }

    function accept() external onlyManager {
        require(status == AMC_Status.PROPOSED, "incorrect status");
        status = AMC_Status.ACTIVE;
        orchestrator.logRequestAccepted();
    }

    function refuse() external onlyManager {
        require(status == AMC_Status.PROPOSED, "incorrect status");
        status = AMC_Status.REJECTED;
        orchestrator.logRequestRefused();
    }

    function deactivate() external onlyAuthorized {
        require(status == AMC_Status.ACTIVE, "incorrect status");
        status = AMC_Status.DEACTIVATED;
        orchestrator.logRequestDeactivated();
    }

    function deposit(
        address tokenAddress,
        uint256 amount
    ) external onlyOwner whenActive {
        // transfer the tokens to the contract
        IERC20(tokenAddress).transferFrom(msg.sender, address(this), amount);
        orchestrator.logDeposit(tokenAddress, amount);
    }

    function trade(
        address tokenIn,
        uint256 amountIn,
        address tokenOut
    ) external onlyManager returns (uint256 amountOut) {
        // // make a trade on uniswap
        // require(
        //     IERC20(tokenIn).approve(address(swapRouter), amountIn),
        //     "Approval failed"
        // );
        // // Set up the parameters for the swap.
        // ISwapRouter.ExactInputSingleParams memory params = ISwapRouter
        //     .ExactInputSingleParams({
        //         tokenIn: tokenIn,
        //         tokenOut: tokenOut,
        //         fee: 3000,
        //         recipient: address(this),
        //         deadline: block.timestamp + 300, // 5-minute deadline
        //         amountIn: amountIn,
        //         amountOutMinimum: 0,
        //         sqrtPriceLimitX96: 0 // No price limit
        //     });
        // // Perform the swap.
        // amountOut = swapRouter.exactInputSingle(params);

        orchestrator.logTrade(tokenIn, tokenOut, amountIn, amountOut);
    }

    function withdraw(address tokenAddress, uint256 amount) external onlyOwner {
        // transfer the tokens to the owner
        IERC20(tokenAddress).transfer(owner, amount);
        orchestrator.logWithdrawal(tokenAddress, amount);
    }

    receive() external payable {
        // reject incoming BNB as only WBNB is accepted
        revert();
    }
}
