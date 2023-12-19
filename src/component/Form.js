import React,{useState}from "react";

export default function Form(props) {

  const handleUpClick =()=>{
    // console.log('Uppercase was clicked');
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('converted to uppercase', 'info')
  }
  const handleLowClick =()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('converted to lowercase', 'info')
  }
  const handleClearClick =()=>{
    let newText = '';
    setText(newText);
    props.showAlert('cleared text', 'danger')
  }
  const handleOnChange =(event)=>{
    // console.log('on change');
    setText(event.target.value);
  }
  function countWords(sentence) {
    // Remove extra spaces within the sentence
    const trimmedSentence = sentence.trim();
    // If the trimmed sentence is empty, return 0 words
    if (trimmedSentence === "") {
        return 0;
    }
    // Split the sentence by spaces to count the words
    const words = trimmedSentence.split(/\s+/);
    // Return the count of words
    return words.length;
}
  const [text, setText] = useState("");
  
  return (
    <>
    <div className="container my-5">
    <h1 className={`text-${props.mode==='dark'?'white':'dark'}`}>{props.heading} </h1>
  
  <textarea className={`form-control bg-${props.mode==='light'?'white':'dark'} text-${props.mode==='dark'?'white':'dark'} `} id="exampleFormControlTextarea1" placeholder="Enter text here" onChange={handleOnChange} value={text} rows="8" ></textarea>
  <button className="btn btn-outline-primary my-3" id="mybox-0" onClick={handleUpClick}>Convert to uppercase</button>
  <button className="btn btn-outline-primary my-3 mx-3" id="mybox-1" onClick={handleLowClick}>Convert to lowercase</button>
  <button className="btn btn-outline-primary my-3" id="mybox-1" onClick={handleClearClick}>clear text</button>

  </div>
  <div className="container">
    <h1 className={`text-${props.mode==='dark'?'white':'dark'}`}>Your Text Summary</h1>
    <p className={`text-${props.mode==='dark'?'white':'dark'} my-5`}>{countWords(text)} words and {text.length} charecters</p>
    <p className={`text-${props.mode==='dark'?'white':'dark'}`}>You can read this in {0.008*countWords(text)} minuts.</p>
    <h2 className={`text-${props.mode==='dark'?'white':'dark'}`}>preview</h2>
    <p className={`text-${props.mode==='dark'?'white':'dark'}`}>{text.length>0?text:"Enter some thing in above text box to preview here"}</p>
  </div>
  </>
    
  );
}
