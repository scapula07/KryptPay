
import { useEffect,useState } from "react";
import {useRecoilState} from "recoil"
import {web3State,EthereumState} from "./RecoilState/globalState"
import {Routes,Route,BrowserRouter as Router } from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Layout from "./Layout/layout";
import Payment from "./pages/Payment";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk'
import Web3 from 'web3'
import Web3Modal from "web3modal";

import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Send from "./pages/SendPage";


function App() {
  const [web3Instance,setWeb3]=useRecoilState(web3State)
  const [account,setAccount] =useState("")
  
   
 

  
  return (
    <div className="App">
     
         <Routes>
            {/**public route */}
            <Route exact path="/"  element={<LandingPage />} />
            <Route exact path="/signup"  element={<SignUp />} />
             <Route exact path="/home"  element={<Home />} />
             <Route exact path="/send"  element={<Send />} />
             <Route exact path="/payment"  element={<Payment />} />
         </Routes>
     
      
    </div>
  );
}

export default App;
