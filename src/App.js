import React from "react";
import { useState } from "react";
import "./App.css";
import About from "./component/About";
import Footer from "./component/Footer";
import Form from "./component/Form";
import Navbar from "./component/Navbar";
import Alert from "./component/Alert";
import { isFocusable } from "@testing-library/user-event/dist/utils";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (msg,type) => {

    setAlert(
      {
        msg:msg,
        type:type
      }
      
    )
    setTimeout(()=>{
      setAlert(null);
    },2000)
    
  }
  
  const toggleMode = ()=> {
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Light mode activated','success')
      document.title="TextUtils -Light";
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='black'
      showAlert('Dark mode activated','success')
      document.title="TextUtils -Dark";

    }
  } 
  return (
    <div className="vh-100 d-flex flex-column">
      < Navbar mode={mode} toggleMode={toggleMode}/>
      <Router>
      <Routes>
          <Route path ="/about" Component={<About />} />

          <Route path = "/">
          <Alert alert={alert}/>
          <Form showAlert = {showAlert} mode={mode} heading="Enter text to analise" />
          </Route>
          </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

