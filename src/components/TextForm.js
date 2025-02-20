import React, {useState} from 'react';

export default function TextForm() {
  const [text, setText] = useState('');

  const handelUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
  }

   const handelLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handelClearTextClick = () =>{
    let newText = '';
    setText(newText);
  }

  const handelOnChange = (event) =>{
    setText(event.target.value);
  }

  
  return (
    <>
    <div>
        <h3>{'Enter Details'}</h3>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
            </label>
            <input 
                type="email" 
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="name@example.com" 
            />
        </div>
        <div className="mb-3">
            <label htmlFor="mybox" className="form-label">
                Example textarea
            </label>
            <textarea className="form-control" id="mybox" value={text} onChange={handelOnChange}  rows="7"></textarea>           
        </div>
        <button className="btn btn-primary" onClick={handelUpClick} style={{ marginRight: '10px' }}>
  Convert to Uppercase
</button>
<button className="btn btn-primary" onClick={handelLoClick} style={{ marginRight: '10px' }}>
  Convert to Lowercase
</button>

<button className="btn btn-primary" onClick={handelClearTextClick} >
  Clear Text
</button>

        
    </div>
    <div className="container">
        <h2>your text summary</h2>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
