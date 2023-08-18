import React, { useState } from 'react'

export default function Textbox(props) {
    const touppercase = () => {
        console.log("The button was pressed to change to the upperCase");
        let text = key.toUpperCase()
        setkey(text)
        props.showalert("Converted to upper case", "success")

    }
    const toLowercase = () => {
        console.log("The button was pressed to change to the LowerCase");
        let text = key.toLowerCase()
        setkey(text)
        props.showalert("Converted to lower case", "success")

    }
    const Clear = () => {

        setkey("")
        props.showalert("Cleared all the fields", "success")
    }
    const spaces = () => {
        let newkey = key.split(/[ ]+/)
        setkey(newkey.join(" "))
        props.showalert("removed all the extra spaces", "success")
    }

    const onChanged = (event) => {
        setkey(event.target.value)
    }


    const [key, setkey] = useState("Hello write the content here please.")
    const bg = {
        backgroundColor: props.status === "dark" ? "#051e41" : "white",
        color: props.status === "dark" ? "white" : "black",
    }

    return (
        <>
            <div style={bg}>
                <div className='container my-2' >
                    <div className="mb-3">
                        <label htmlFor="discription" className="form-label" ><h1>Example of textArea</h1></label>
                        <textarea value={key} onChange={onChanged} className="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
                    </div>
                    <button type="button" disabled={key.length === 0} className='btn btn-primary mx-3' onClick={touppercase}>Change to upperCase</button>
                    <button type="button" disabled={key.length === 0} className='btn btn-primary my-3 mx-3' onClick={toLowercase}>Change to LowerCase</button>
                    <button type="button" disabled={key.length === 0} className='btn btn-primary my-3 mx-3' onClick={Clear}>Clear Field</button>
                    <button type="button" disabled={key.length === 0} className='btn btn-primary my-3' onClick={spaces}>Remove Extra spaces</button>


                </div>
                <div className="container" style={bg}>
                    <h2>Text Summary</h2>
                    <p><b>{key.split(" ").filter((i)=>{return i.length!==0}).length} words and {key.length} characters</b></p>
                    <p><i>About {key.split(" ").filter((i)=>{return i.length!==0}).length * 0.008} to read the words</i></p>
                    <h2>Preview</h2>
                    <p><u>{key}</u></p>
                </div>
            </div>
        </>
    )
}

