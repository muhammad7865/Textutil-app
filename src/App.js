import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Alert from './Components/Alert'
import Textbox from './Components/Textbox'


function App() {

  const toggelmode = () => {
    if (mood === "dark") {
      setmood("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mood has been enabled", "success")
    }
    else {
      setmood("dark")
      document.body.style.backgroundColor = "#051e41"
      showAlert("Dark mood has been enabled", "primary")
    }
  }
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000)
  }
  const [alert, setAlert] = useState(null)
  const [mood, setmood] = useState("light")


  return (
    <>
      <Navbar title="TextUtil" status={mood} toggel={toggelmode} />
      <Alert alert={alert} />
      <Textbox status={mood} showalert={showAlert}/>
    </>
  );
}

export default App;
