import CoinbaseWalletSDK from '@coinbase/wallet-sdk'
import Web3 from 'web3'
import Web3Modal from "web3modal";

const APP_NAME = "KryptPay"
// const APP_LOGO_URL = 'https://example.com/logo.png'
const DEFAULT_ETH_JSONRPC_URL = 'https://mainnet.infura.io/v3/a5b2c7fb4bb14412832e0fad444661dd'
const DEFAULT_CHAIN_ID = 1

export const coinbaseWallet = new CoinbaseWalletSDK({
  appName: APP_NAME,
  // appLogoUrl: APP_LOGO_URL,
  darkMode: false
})
export const ethereum = coinbaseWallet.makeWeb3Provider(DEFAULT_ETH_JSONRPC_URL, DEFAULT_CHAIN_ID)
export const web3 = new Web3(ethereum)