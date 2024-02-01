import React,{useState} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

function App(){
    const [mode,setMode] = useState('dark')
    const [alert,setAlert]=useState(null)

    const alertHandler=(msg,type)=>{
        setAlert({msg:msg,type:type})
        setTimeout(()=>{
            setAlert(null)},2000)

    }   
    const toggleMode=()=>{
        if(mode==='light'){
            setMode("dark")
            alertHandler('Dark Mode Activated','Success')
        }else{
            setMode("light")
            alertHandler('Light Mode Activated','Success')
        }
    }
    return (
        <>
        <Router>
            <Navbar mode={mode}  toggleMode={toggleMode}/>
            <Alert  alert={alert} />
            <div className="container">
            <Routes>
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/" element={<TextForm heading="Enter text" alertHandler={alertHandler} />} />
            </Routes>
            </div>
        </Router>
        </>
    )
}
export default App;