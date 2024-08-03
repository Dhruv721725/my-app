import React from 'react'
// import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

export default function NavBar(props) {    
    return(
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} `}>
          <div className="container-fluid">
          {/* <Link to='/' className='navbar-brand'>{props.title}</Link> */}
          <a href='/' className='navbar-brand'>{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                  {/* <Link className='nav-link active' aria-current="page" to='/'>Home</Link> */}
                </li>
                <li className="nav-item">
                  <a className="nav-link" href='/About'>{props.aboutText}</a>
                  {/* <Link className="nav-link" to='/About'>{props.aboutText}</Link> */}
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode} />
                <label className={`form-check-label text-${props.clr}`} htmlFor="flexSwitchCheckDefault" >{props.clr} mode</label>
              </div>
            </div>
          </div>
        </nav>
    )
}

// NavBar.propTypes = {
//     title: PropTypes.string.isRequired,
//     aboutText:PropTypes.string
// }
// NavBar.defaultProps={
//     title: 'Set Title Here',
//     aboutText: 'About Text'
// }