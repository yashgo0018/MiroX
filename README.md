# <img src="https://mirox.app/logo.png" style="width:3rem" /> MiroX

MiroX is a decentralized asset management platform allowing users to have asset managers manage their crypto assets on request. With MiroX, users can select whitelisted tokens to be managed, and managers can trade on their behalf. The platform ensures transparency and flexibility through a secure and well-designed interface.

## Features

> Asset Management Contracts (AMCs): Contracts for each asset management request, allowing managers to oversee and execute trades.

> User Registration: Users register with unique usernames, ensuring seamless request creation and management.

> Token Whitelisting: Only whitelisted tokens can be managed by asset managers.

> Logging and Event Emissions: Key actions like deposits, withdrawals, and trades are logged, providing transparency and traceability.

> Customizable Commissions: Managers set commission rates, with all transactions transparently recorded on-chain.

> Secure and Usable UI: MiroX offers an intuitive interface for both asset managers and clients.

## Prerequisites

- Deno

- Solidity-compatible development environment

- Some courage

## Installation

#### Clone the repository:

```bash
git clone https://github.com/yashgo0018/MiroX.git
cd MiroX
```

#### Install dependencies:

```bash
deno i
cd packages/contracts
deno i
cd packages/client
deno i
```

#### Run hardhat testnet

```bash
cd packages/contracts
deno task localnode
deno task compile
```

#### Run frontend

```bash
cd packages/client
deno task dev
```

## Contracts and Usage

### Contract Addresses

- **Orchestrator**: [0xE0404b43CE653bbB437Cb2D6B9b9802F3652bf77](https://testnet.bscscan.com/address/0xe0404b43ce653bbb437cb2d6b9b9802f3652bf77#code)
- **AMC (Asset Management Contract)**: [0x0533b7898cB630F63858Bd9b42F8Da07d20DCF91](https://testnet.bscscan.com/address/0x0533b7898cB630F63858Bd9b42F8Da07d20DCF91#code)

### Test Flow

For a hands-on test of the MiroX platform, follow these transactions on the BSC Testnet:

1. **Register Investor**: [View Transaction](https://testnet.bscscan.com/tx/0xd3a3298777a5e12d6ff1d7434c676f6cec484874e45fe1b7467b9b0c97d8e7e6)
2. **Register Manager**: [View Transaction](https://testnet.bscscan.com/tx/0xd5be76a7fadd34e6814faad77337a204f5a629ace335ce1fcfd8df695f77345a)
3. **Create AMC Request**: [View Transaction](https://testnet.bscscan.com/tx/0x210cdc5d8b850b78171f8b1d8a026ba28989ad328b11066e8a89732dc19b4f13)
4. **Accept AMC Request**: [View Transaction](https://testnet.bscscan.com/tx/0x0c62ab6041f1ddf763c1b2c99d13f8dda4271038ac24938d5f2f4ba4f21507a6)
5. **Deposit Tokens In AMC**: [View Transaction](https://testnet.bscscan.com/tx/0x5049a54e4b6ce3498bdfdbd887ee0d9fdf82b9919c617e3018a3af4b1ce176cc)
6. **Trade In AMC**: [View Transaction](https://testnet.bscscan.com/tx/0x7d0b0f9cfd6881a345d9fddf5b3a7e94e11acbd15e008b0eb8a86d34d888f7e5)

### Usage Guide

#### Register a User

To register an investor or manager with a unique username:

```solidity
Orchestrator.register("username");
```

#### Create an AMC Request

Users can request an asset manager by specifying the manager’s username and commission rate:

```solidity
Orchestrator.createRequest("managerUsername", commissionBps, "metadata");
```

#### Managing an AMC

Once a request is accepted, the manager has access to key AMC functionalities:

- **Accept/Reject Requests**: Managers approve or reject asset management requests.
- **Deposit Tokens**: Investors can deposit tokens into their AMC.
- **Trade Tokens**: Managers execute trades with the deposited tokens.
- **Withdraw Tokens**: Managers withdraw tokens on behalf of the investor when needed.
  Here’s an updated README with Future Improvements and an automatic Contributors section:

---

## Future Improvements

To enhance MiroX functionality and improve user experience, we plan to implement the following features:

1. **Proxy Contracts for AMC**: Use proxy contracts for AMC instances to reduce gas costs during deployment via the Orchestrator.
2. **Event Indexer**: Create an indexer to track and aggregate events emitted by the contracts, allowing for a more comprehensive view of asset management activities.
3. **PancakeSwap and Uniswap Integration**: Enable token trading through both PancakeSwap and Uniswap for a broader selection of assets and liquidity.
4. **Manager’s Dashboard**: Develop a dedicated dashboard for managers to view assets, pending requests, and manage trades efficiently.
5. **Restricted Trading Options**: Allow investors to limit trading to selected and verified tokens, adding a layer of safety and compliance to the platform.

## Contributors

Thank you to everyone who has contributed to the development of MiroX!:

[![Contributors](https://contrib.rocks/image?repo=yashgo0018/MiroX)](https://github.com/yashgo0018/MiroX/graphs/contributors)
