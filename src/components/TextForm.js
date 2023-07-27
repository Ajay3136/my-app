import React, { useState } from 'react'

export default function TextForm() {
    const [text, setText] = useState("");

    const onChangeHandler = (event)=> {
        setText(event.target.value);
    }

    const onUpClickHandler = ()=> {
        let textVal = text.toUpperCase();
        setText(textVal);
    }

    const onLowerClickHandler = ()=> {
        let textVal = text.toLowerCase();
        setText(textVal);
    }

    return (
        <div>
            <div className="mb-3 container my-3">
                <h2>Enter Your text here</h2>
                <textarea className="form-control" value={text} onChange={onChangeHandler} id="myText" rows="8"></textarea>
                <button className='btn btn-primary my-3 mx-3' onClick={onUpClickHandler}>Convert to UpperCase</button>
                <button className='btn btn-primary my-3 mx-3' onClick={onLowerClickHandler}>Convert to lowerCase</button>
            </div>
            <div className='container mb-3'>
                <h2>You text summary here</h2>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}
