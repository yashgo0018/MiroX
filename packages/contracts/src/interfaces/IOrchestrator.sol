//SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

interface IOrchestrator {
    function logRequestAccepted() external;

    function logRequestRefused() external;

    function logRequestDeactivated() external;
}
