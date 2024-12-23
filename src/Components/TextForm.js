import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  }
  const handleNewClick = () => {
     setText('');
    let newText = "The new text is here";
    setText(newText);
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const [text, setText] = useState("Enter text here");
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode}`} id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleNewClick}>Add new Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Handle Spaces</button>
      <button className="btn btn-primary" onClick={handleCopy}>Copy Text </button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
