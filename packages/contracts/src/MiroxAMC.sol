//SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "./MiroxMaster.sol";
import "./AuxillaryList.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MiroxAMC {
    MiroxMaster private _master;
    AuxillaryList private _whitelist;

    address immutable client;
    address immutable manager;
    IERC20 immutable baseToken;

    event AssetAllowed(address asset);
    event AssetDisallowed(address asset);
    event Deposit(uint256 amount_);
    event Withdraw(uint256 amount_);

    modifier onlyClient() {
        require(msg.sender == client, "Only client can call this function");
        _;
    }

    modifier onlyManager() {
        require(msg.sender == manager, "Only manager can call this function");
        _;
    }

    constructor(address client_, address manager_, address baseToken_) {
        // Expect deployer to be MiroxMaster
        _master = MiroxMaster(msg.sender);

        client = client_;
        manager = manager_;
        baseToken = IERC20(baseToken_);
    }

    function allowAsset(address asset_) external onlyClient {
        _whitelist.safeAdd(asset_);

        emit AssetAllowed(asset_);
    }

    function disallowAsset(address asset_) external onlyClient {
        _whitelist.safeRemove(asset_);

        emit AssetDisallowed(asset_);
    }

    function getWhitelist() external view returns (address[] memory) {
        return _whitelist.values();
    }

    function deposit(uint256 amount_) external onlyClient {
        require(amount_ > 0, "Amount can not be zero");

        baseToken.transferFrom(msg.sender, address(this), amount_);

        emit Deposit(msg.sender, amount_);
    }

    function withdraw(address token_, uint256 amount_) external onlyClient {
        require(amount_ > 0, "Amount can not be zero");

        // TODO : convert to base token
        IERC20(token_).transfer(msg.sender, amount_);

        emit Withdraw(msg.sender, amount_);
    }

    function trade(
        address tokenFrom_,
        uint256 amountIn_,
        address tokenTo_,
        uint256 amountOutMin_
    ) external onlyManager {
        require(amount_ > 0, "Amount can not be zero");

        // TODO : Trade tokenFrom_ to tokenTo_
    }
}
