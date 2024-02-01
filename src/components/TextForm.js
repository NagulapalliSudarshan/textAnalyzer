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
    }
    const handleLowerCase=()=>{
        const newText = text.toLowerCase()
        nextText(newText)
    }
    const handleClear=()=>{

        const newText = ""
        nextText(newText)
    }

    const handleRepeat=(event)=>{
        const number = event.target.value
        const newText = text.repeat(number)
        nextText(newText)
    }

  return (
    <>
      <div className="mb-3">
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
        <button type="button" className="btn btn-danger m-2" onClick={handleClear}>Clear </button>
        <br/><span className="mx-2">Repeat:</span>
        <input type='number' onChange={handleRepeat}/>

        <hr/>
        <h4>Analysis</h4>
        <span>Number of words = {text.split(" ").length}</span><br/>
        <span>Number of characters = {text.length}</span><br/>
        <span>Time to read the text(sec) = {text.split(" ").length*0.008}</span>

        <hr/>
        <h4>Preview</h4>
        <p>{text}</p>
        
      </div>
    </>
  );
}

export default TextForm;