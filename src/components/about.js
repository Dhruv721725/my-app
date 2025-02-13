import React, { useState } from 'react'

export default function About() {
    const [myStyle,setmyStyle]=useState({
      color: 'white',
      backgroundColor:'rgb(44, 43, 41)'
    })
    const [btntext,setbtntext]=useState('Enable Light Mode')
    const modeClick=()=>{
      if (myStyle.backgroundColor==='rgb(44,44,44)'){
        setmyStyle({
          color: 'white',
          backgroundColor:'rgb(255,160,0)'
        })
        setbtntext('Enable Dark Mode')
      }
      else{
        setmyStyle({
          color: 'white',
          backgroundColor:'rgb(44,44,44)'
        })
        setbtntext('Enable Light Mode')
      }

    }

    return (
    <div className='mx-3' style={myStyle}>
        <div className="accordion accordion-flush" id="accordionFlushExample" >
          <div className="accordion-item" >
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={myStyle}>
                Accordion Item #1
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={myStyle}>
              <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={myStyle}>
                Accordion Item #2
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={myStyle}>
              <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={myStyle}>
                Accordion Item #3
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={myStyle}>
              <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-primary my-2 mx-2" onClick={modeClick}>{btntext}</button>
    </div>
  )
}
