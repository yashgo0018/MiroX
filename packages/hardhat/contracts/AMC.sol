//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

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
	) {
		status = AMC_Status.PROPOSED;
		commissionBps = _commissionBps;
		metadata = _metadata;
		owner = _owner;
		manager = _manager;
	}

	function accept() external onlyManager {
		require(status == AMC_Status.PROPOSED, "incorrect status");
		status = AMC_Status.ACTIVE;
	}

	function refuse() external onlyManager {
		require(status == AMC_Status.PROPOSED, "incorrect status");
		status = AMC_Status.REJECTED;
	}

	function deactivate() external onlyAuthorized {
		require(status == AMC_Status.ACTIVE, "incorrect status");
		status = AMC_Status.DEACTIVATED;
	}

	function deposit(
		address tokenAddress,
		uint256 amount
	) external onlyOwner whenActive {
		// transfer the tokens to the contract
		IERC20(tokenAddress).transferFrom(msg.sender, address(this), amount);
	}

	function trade(
		address tokenIn,
		uint256 amountIn,
		address tokenOut
	) external onlyManager {
		// make a trade on uniswap
	}

	function withdraw(address tokenAddress, uint256 amount) external onlyOwner {
		// transfer the tokens to the owner
		IERC20(tokenAddress).transfer(owner, amount);
	}

	receive() external payable {
		// reject incoming BNB as only WBNB is accepted
		revert();
	}
}
