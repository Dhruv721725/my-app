import './App.css';
import NavBar from './components/navbar';
import TextForm from './components/TextForm';
import About from './components/about';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode,setmode]=useState('dark')
  const [clr,setclr]=useState('light')
  const [bgclr,setbgclr]=useState('#07323e')
  const togglemode=()=>{
    if (mode==='dark'){
      setmode('light')
      setclr('dark')
      setbgclr('#61dafb')
      showalert('Dark mode has been disabled','success')
    }
    else{
      setmode('dark')
      setclr('light')
      setbgclr('#07323e')
      showalert('Dark mode has been enabled','success')
    }
  }
  const[alert,setalert]=useState('')
  const showalert=(msg,typ)=>{
    setalert({
      message:msg,
      type:typ
    })
  }

  return (
    <div className='parent' style={{backgroundColor:`${bgclr}`, height:'100vh'}}>
      {/* <Router> */}
      <NavBar title='TextUtils' aboutText={'About'} mode={mode} clr={clr} togglemode={togglemode}/>
      <Alert message={alert} />
      <TextForm title='Enter sentence here' aboutText='About'/>
      <About/>
      {/* <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path='/' element=
          {<TextForm title='Enter sentence here' aboutText='About'/>}
        />
      </Routes>
      </Router> */}
    </div>
  );
}
export default App;

