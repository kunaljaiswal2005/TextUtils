import React, { useState } from 'react';

export default function Textform(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    };

    const handleClearClick = () => {
        setText("");
        props.showAlert("Text Cleared", "success");
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success");
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/\s+/).filter(Boolean).join(" ");
        setText(newText);
        props.showAlert("Extra Spaces Removed", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState("");

    // Accurate word count
    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className="mb-3">{props.heading}</h1>

                <textarea
                    className="form-control"
                    id="myBox"
                    rows="5"
                    placeholder="Enter text here..."
                    value={text}
                    onChange={handleOnChange}
                    style={{
                        backgroundColor: props.mode === 'dark' ? '#404E61' : 'white',
                        color: props.mode === 'dark' ? 'white' : '#042743'
                    }}
                />

                <div className="mt-3">
                    <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleUpClick}>UPPERCASE</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleLoClick}>lowercase</button>
                    <button disabled={text.length === 0} className="btn btn-danger mx-1" onClick={handleClearClick}>Clear</button>
                    <button disabled={text.length === 0} className="btn btn-secondary mx-1" onClick={handleCopy}>Copy</button>
                    <button disabled={text.length === 0} className="btn btn-warning mx-1" onClick={handleExtraSpaces}>Remove Spaces</button>
                </div>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Text Summary</h2>
                <p>{wordCount} words and {text.length} characters</p>
                <p>{(wordCount * 0.008).toFixed(2)} minutes read</p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview..."}</p>
            </div>
        </>
    );
}
