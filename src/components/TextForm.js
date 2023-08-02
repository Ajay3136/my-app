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

    const onClearClickHandler = ()=> {
        let textVal = "";
        setText(textVal);
    }

    const onCopyClickHandler = ()=> {
        var textVal = document.getElementById("myText");
        textVal.select();
        navigator.clipboard.writeText(textVal.value);
    }

    const onPasteClickHandler = ()=> {
        var textVal = document.getElementById("myText");
        textVal.select();
        navigator.clipboard.readText().then(cliptext =>
            (setText(cliptext)));
    }

    const removeExtraSpaceHandler = ()=> {
        var textVal = text.split(/[ ]+/);
        setText(textVal.join(" "));
    }

    return (
        <div>
            <div className="mb-3 container my-3">
                <h2>Enter Your text here</h2>
                <textarea className="form-control" value={text} onChange={onChangeHandler} id="myText" rows="8"></textarea>
                <button className='btn btn-primary my-3 mx-2' onClick={onUpClickHandler}>Convert to UpperCase</button>
                <button className='btn btn-primary my-3 mx-2' onClick={onLowerClickHandler}>Convert to lowerCase</button>
                <button className='btn btn-primary my-3 mx-2' onClick={onClearClickHandler}>Clear</button>
                <button className='btn btn-primary my-3 mx-2' onClick={onCopyClickHandler}>Copy</button>
                <button className='btn btn-primary my-3 mx-2' onClick={onPasteClickHandler}>Paste</button>
                <button className='btn btn-primary my-3 mx-2' onClick={removeExtraSpaceHandler}>Remove Space</button>
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
