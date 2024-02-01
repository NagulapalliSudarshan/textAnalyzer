import React,{useState} from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";


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
        <div>
            <Navbar mode={mode}  toggleMode={toggleMode}/>
            <Alert  alert={alert} />
            <div className="container">
                <TextForm heading="Enter text" alertHandler={alertHandler} />
            </div>
        </div>
    )
}
export default App;