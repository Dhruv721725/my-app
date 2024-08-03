import React,{useState} from 'react'

export default function TextForm(params) {
  
  const [text,setText]=useState('Enter text here:')
  const upperClick=()=>{
    const ntext=text.toUpperCase()
    setText(ntext)
  }
  const clearClick=()=>{
    setText('')
  }
  const handleonchange=(event)=>{
      setText(event.target.value)
  }
    return(
        <div className='form'>
        
        <div className="mb-3">
          <label htmlFor="mytextbox" className="form-label">{params.title}</label>
          <textarea className="form-control" id="mytextbox" rows="3" value={text} onChange={handleonchange}></textarea>
          <button className='btn btn-primary mx-1' onClick={upperClick}>Upper_case</button>
          <button className='btn btn-primary mx-1' onClick={clearClick}>Clear</button>
        </div>
        <div className='mb-3'>
          <p>{text.split(' ').length} words and {text.length} characters</p>
        </div>
        </div>
    )
}
