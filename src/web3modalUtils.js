import Web3 from "web3";
import Web3Modal from "web3modal";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

const providerOptions = {
    coinbasewallet: {
      package: CoinbaseWalletSDK, // Required
      options: {
        appName: "KryptPay", // Required
        infuraId: "a5b2c7fb4bb14412832e0fad444661dd" , // Required
        rpc: "", // Optional if `infuraId` is provided; otherwise it's required
        chainId: 5, // Optional. It defaults to 1 if not provided
        darkMode: false // Optional. Use dark theme, defaults to false
      }
    },
}  

const web3Modal = new Web3Modal({
    network: "goerli", // optional
    cacheProvider: false, // optional
    disableInjectedProvider:false,
    providerOptions// required
  
  });