
import { useEffect,useState } from "react";
import {useRecoilState} from "recoil"
import {currentUserState} from "./RecoilState/globalState"
import {Routes,Route,BrowserRouter as Router } from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Layout from "./Layout/layout";
import Payment from "./pages/Payment";
import { onAuthStateChanged } from "firebase/auth"
import {auth} from "./firebase"
import LogIn from "./pages/LogIn";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Send from "./pages/SendPage";
import Methods from "./pages/paymentmethod";
import Settings from "./pages/Settings";
import Portfolio from "./pages/Portfolio"
import Exchange from "./pages/Exchange";
import Purchase from "./pages/Exchange/purchase";
import Swap from "./pages/Exchange/swap";
import Receive from "./pages/ReceivePage";
function App() {
 
  const [currentUser,setcurrentUser] =useRecoilState(currentUserState)
  const [authUser,setUsers]=useState([])
 

//   let authListner=null
//   useEffect( ()=>{
  
//     authListner=onAuthStateChanged(auth,(user)=>{
//         if (user !== null) {
//             const uid = user.uid;
//             //const {displayName,email,uid}=user
//          //   console.log(displayName)

//             const userRef =doc(db,"users", uid)
//             console.log(userRef)
//            getDoc(userRef).then(res=> {
//             setcurrentUser(res.data())
//             setUsers([res.data()])
//           })
//         }
//         })
//    return(
//        authListner()
//    )
// },[])

  
  return (
    <div className="App">
     
         <Routes>
            {/**public route */}
            <Route exact path="/"  element={<LandingPage />} />
            <Route exact path="/signup"  element={<SignUp />} />
            <Route exact path="/login"  element={<LogIn />} />
             <Route exact path="/home"  element={<Home />} />
             <Route exact path="/send"  element={<Send />} />
             <Route exact path="/method/:id"  element={<Methods />} />
             <Route exact path="/payment"  element={<Payment />} />
             <Route exact path="/settings"  element={<Settings />} />
             <Route exact path="/portfolio"  element={<Portfolio />} />
             <Route exact path="/exchange"  element={<Exchange />} >
             <Route exact path="purchase"  element={<Purchase />} />
             <Route exact path="swap"  element={<Swap />} />
            </Route>
            <Route exact path="receive"  element={<Receive />} />
         </Routes>
     
      
    </div>
  );
}

export default App;
