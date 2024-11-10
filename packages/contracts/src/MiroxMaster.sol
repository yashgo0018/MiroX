//SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "./MiroxAMC.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MiroxMaster is Ownable {
    uint16 public maxManagerCommision;
    uint16 public platformTransactionFee_FRACTION;

    struct Manager {
        string name;
        string imageUrl;
        string bio;
        uint16 commission;
        uint256 registerdAt;
    }

    mapping(address => Manager) private _managers;
    // Expect value to be a base token if request exists else address(0)
    mapping(address => mapping(address => address)) private _requests;
    mapping(address => bool) public isValidAMC;

    event ManagementRequested(
        address indexed client,
        address indexed manager,
        uint16 commission
    );
    event ManagementStarted(
        address indexed client,
        address indexed manager,
        address amc
    );
    event ManagementRequestDenied(
        address indexed client,
        address indexed manager
    );
    event ManagementRequestCancelled(
        address indexed client,
        address indexed manager
    );
    event ManagementTerminated(
        address indexed client,
        address indexed manager,
        address indexed amc
    );

    modifier onlyManager() {
        require(
            _managers[msg.sender].registerdAt != 0,
            "Manager not registered"
        );
        _;
    }

    modifier requestExists(address client_, address manager_) {
        require(
            _requests[client_][manager_] != address(0),
            "No pending request"
        );
        _;
    }

    constructor() Ownable(msg.sender) {}

    function setPlatformParameters(
        uint16 maxManagerCommision_,
        uint16 platformTransactionFee_FRACTION_
    ) external onlyOwner {
        maxManagerCommision = maxManagerCommision_;
        platformTransactionFee_FRACTION = platformTransactionFee_FRACTION_;
    }

    function registerAsManager(
        string calldata name_,
        string calldata imageUrl_,
        string calldata bio_,
        uint16 commission_
    ) external {
        require(
            _managers[msg.sender].registerdAt == 0,
            "Already registered as manager"
        );
        require(commission_ > 0, "Commission can not be zero");
        require(
            commission_ <= 100 * 100,
            "Commission can not be more than 100"
        );
        require(
            commission_ <= maxManagerCommision,
            "Commission exceeds the maximum"
        );

        _managers[msg.sender] = Manager({
            name: name_,
            imageUrl: imageUrl_,
            bio: bio_,
            commission: commission_,
            registerdAt: block.timestamp
        });
    }

    function requestAssetManagement(
        address manager_,
        address baseToken_
    ) external {
        require(manager_ != address(0), "Invalid manager address");
        require(_managers[manager_].registerdAt != 0, "Manager not registered");
        require(manager_ != msg.sender, "Can not request self");
        require(
            _requests[msg.sender][manager_] == address(0),
            "Already requested"
        );

        _requests[msg.sender][manager_] = baseToken_;

        emit ManagementRequested(
            msg.sender,
            manager_,
            _managers[manager_].commission
        );
    }

    function acceptAssetManagementRequest(
        address client_
    ) external requestExists(client_, msg.sender) {
        address baseToken = _requests[client_][msg.sender];

        address amc = address(new MiroxAMC(client_, msg.sender, baseToken));
        isValidAMC[amc] = true;

        _requests[client_][msg.sender] = address(0);

        emit ManagementStarted(client_, msg.sender, amc);
    }

    function denyAssetManagementRequest(
        address client_
    ) external requestExists(client_, msg.sender) {
        _requests[client_][msg.sender] = address(0);

        emit ManagementRequestDenied(client_, msg.sender);
    }

    function cancelAssetManagementRequest(
        address manager_
    ) external requestExists(msg.sender, manager_) {
        _requests[msg.sender][manager_] = 0;

        emit ManagementRequestCancelled(msg.sender, manager_);
    }

    function terminateAssetManagement(address manager_) external onlyManager {
        emit ManagementTerminated(msg.sender, manager_, address(this));
    }

    function managerProfile(
        address manager_
    )
        external
        view
        returns (
            string memory name,
            string memory imageUrl,
            string memory bio,
            uint16 commission
        )
    {
        name = _managers[manager_].name;
        imageUrl = _managers[manager_].imageUrl;
        bio = _managers[manager_].bio;
        commission = _managers[manager_].commission;
    }

    function updateCommission(uint16 commission_) external onlyManager {
        require(
            _managers[msg.sender].registerdAt != 0,
            "Manager not registered"
        );
        require(commission_ > 0, "Commission can not be zero");
        require(
            commission_ <= 100 * 100,
            "Commission can not be more than 100"
        );
        require(
            commission_ <= maxManagerCommision,
            "Commission exceeds the maximum"
        );

        _managers[manager_].commission = commission_;
    }
}
