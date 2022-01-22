import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleClearClick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    const handleCopy = () =>{
        // let cpText = document.getElementById('myBox');
        // cpText.select();
        // document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied", "success");
    }

    const removeExtraspace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed", "success");
    }

    const handleCapClick = () =>{
        let arr = text.split(" ");
        // for (let i = 0; i < arr.length; i++) {
        //     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);   
        // }
        console.log(arr);   
        let words = []
        arr.forEach(element => {
            element = element.charAt(0).toUpperCase() + element.slice(1);
            words.push(element);
        });
        // console.log(words);
        let newText = words.join(" ");
        setText(newText);
    }
    const handleToClick = () =>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }

    const handelOnChange = (event) =>{
        // console.log("On Change done");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter Text here');
    // text = "New Test"; // wrong way to set the text
    // We have to use the function only to set the text as React does not allow to old process.

  return (
     <> 
    <div className="container">
        <h1 className={`text-${props.mode === 'light'?'dark':'light'}`}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor:props.mode === 'light'?'white':'#343a40',color:props.mode === 'light'?'black':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleToClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCapClick}>Captalize Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={removeExtraspace}>Remove Extra Spaces</button>
    </div>
    <div className={`container my-3 text-${props.mode === 'light'?'dark':'light'}`}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length} words, {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=> {return element.length!==0}).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Please Eneter some text in above text area"}</p>
    </div>
    </>
  );
}
