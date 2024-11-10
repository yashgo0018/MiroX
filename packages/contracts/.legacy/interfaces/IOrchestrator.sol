//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

interface IOrchestrator {
    function logRequestAccepted() external;

    function logRequestRefused() external;

    function logRequestDeactivated() external;
}
