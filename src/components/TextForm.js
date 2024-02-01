import { useState } from "react";


function TextForm(props) {
    const [text,nextText] = useState("")

    const handleChange=(event)=>{
        const newText = event.target.value
        nextText(newText);
    }
    const handleUpperCase=()=>{
        const newText = text.toUpperCase()
        nextText(newText)
        props.alertHandler("text changed to upperCase","Success")
    }
    const handleLowerCase=()=>{
        const newText = text.toLowerCase()
        nextText(newText)
        props.alertHandler("text changed to LowerCase","Success")
    }
    const handleClear=()=>{
        const newText = ""
        nextText(newText)
        props.alertHandler("text has been cleared","Success")
    }
    const handleSpaces=()=>{ 
        const newText = text.replace(/\s{2,}/g, ' ').trim() 
        nextText(newText)
        props.alertHandler("extra spaces have been removed","Success")
    }

    function numberofWords(s){
        let arr = s.split(" ")
        let num=0
        arr.forEach(string=>{
            if(string.length>0 && string!==" "){
                num++;
            }
        })

        return num
    }

  return (
    <>
      <div className="m-3">
        <h3>{props.heading}</h3>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          onChange={handleChange}
          value={text}
        ></textarea> 

        <button type="button" className="btn btn-primary m-2" onClick={handleUpperCase}>Upper Case</button>
        <button type="button" className="btn btn-primary m-2" onClick={handleLowerCase}>Lower Case</button>
        <button type="button" className="btn btn-primary m-2" onClick={handleSpaces}>Remove Extra spaces </button>
        <button type="button" className="btn btn-danger m-2" onClick={handleClear}>Clear </button>
        

        <hr/>
        <h4>Analysis</h4>
        <span>Number of words = {numberofWords(text)}</span><br/>
        <span>Number of characters = {text.length}</span><br/>
        <span>Time to read the text(sec) = {text.split(" ").length*0.008}</span>

        <hr/>
        <h4>Preview</h4>
        <p>{text?text:"Enter some text in textBox above to see preview"}</p>
        
      </div>
    </>
  );
}

export default TextForm;