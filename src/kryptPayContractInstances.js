import kryptPayTokenAbi from "./ContractABI/klvtoken.json"
import kryptPayAppAbi from "./ContractABI/kryptAppAbi.json"
import {coinbaseWallet ,ethereum ,web3 } from "./coinbaseInitialization"

const TokenContractAddress="0xE09Aa821C1480aE46364583563a500f1288f5E7D"
const AppContractAddress="0x2651bfd0C2e3787C35FDEce4c2beECf33f29e903"

export const KLVTokencontract = new web3.eth.Contract(kryptPayTokenAbi , TokenContractAddress)
export const KLVAppcontract = new web3.eth.Contract(kryptPayTokenAbi ,AppContractAddress)