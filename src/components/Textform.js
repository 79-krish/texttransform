import React, { useState } from 'react'

export default function Textform(props) {
  const handelClicked=()=>{
    console.log("uppercase was clicked" +text);
    let newtext=text.toUpperCase();
    setText(newtext);
  }
  const handleUpClicked=()=>{
    console.log("lowercase was clicked")
    let newtext=text.toLowerCase();
    setText(newtext);
  }
  const handleOnChange=(event)=>{
      setText(event.target.value);
  }
  const  handleUpremove=()=>{
    let newtext='';
    setText(newtext);
  }
  const [text, setText] = useState("Enter text here");
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
<div className="mb-3 my-3">
  <label for="mybox" className="form-label">Example textarea</label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="7"></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handelClicked}>convert to uppercase</button>
<button className='btn btn-primary mx-2' onClick={handleUpClicked}>convert to lowercase</button>
<button className='btn btn-primary mx-2' onClick={handleUpremove}>Remove text</button>
</div>
<div className='container mb-3'>
<h2 className="hedading-1">your text summary</h2>
<p>{text.split(" ").length}words{text.length}characters</p>

</div>
</>
  )
}
