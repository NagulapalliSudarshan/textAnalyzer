import React,{useState} from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App(){
    const [mode,setMode] = useState('dark')
    const toggleMode=()=>{
        if(mode==='light'){
            setMode("dark")
        }else{
            setMode("light")
        }
    }
    return (
        <div>
            <Navbar mode={mode}  toggleMode={toggleMode}/>
            <div className="container">
                <TextForm heading="Enter text" />
            </div>
        </div>
    )
}
export default App;