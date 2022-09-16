# KryptPay

*KryptPay* is a blockchain utility and cross border payment platform. KryptPay can be used to make our everyday transactions like paying for water, electricity, WiFi and grocery etc.

## App Details

*Live Link:* [KryptPay](https://krypt-pay.vercel.app/)

*TokenContractAddress:*  <https://goerli.etherscan.io/address/0xe09aa821c1480ae46364583563a500f1288f5e7d#events>

*AppContractAddress:* <https://goerli.etherscan.io/address/0x2651bfd0C2e3787C35FDEce4c2beECf33f29e903>

## Technologies 

The following Tech tools where used in building this project

* *Reactjs and Tailwindcss* - To build and make the frontend and user interfaces
* *Solidity* - To write the smart contract deploy on ethereum chain
* *IPFS Web3storage* - To store transaction files 
* *Coinbase Wallet Sdk* - Used to sign transactions in the dapp
* *Worldcoin World Id* - Used to verifiy a user create an account only once and they are unique humans
* *Firebase* - To store app data offchain

### Installation and setup

Clone the repo `git clone` and navigate to the repo directory.

Install dependencies `yarn install`

Start the development sever `yarn start`

### Dapp Architecture 
  
  This is a short description of the architure and structure of our dapp.

  Kryptpay works on two smart contracts :

  *A Erc20 token smart contract - This contract implement the basic   logic of native erc20 token ,KLV. It holds the logic for minting tokens to users

  *contract Link* -<https://github.com/Horlarmmy/KryptPay/blob/main/contracts/Token.sol>
  
  *A kryptPay App contract: this contract holds the logic on which the kryptpay dapp works on .It holds the functionalities for transfer,purchase,swap etc

   *contract Link*- <https://github.com/Horlarmmy/KryptPay/blob/main/contracts/KryptApp.sol>

  Transfer of tokens in kryptPay can be achieved simply if the email address recipient registered on our dapp is know.This reduce the risk of send tokens to the wrong walet address.

### KryptPay features
 
 *Decentralized Exchange -allows the purchase and swap of tokens
 *Token transfer - to individuals and also utility providers

### Usage

KryptPay offers a cheaper and easy payment gateway to allow for payment of basic utilities.

Utility providers such as water corps can simplyy integrate on KryptPay  or registered on kryptpay .This will allow easy reception of payments from end users or customers  all over the world.


## AUTHORS
Henry Ezeh
UI/UX Deigner

Batholomew Onogwu
Frontend/Blockchain Dev

Toheeb Alade
Backend/Blockchain Dev