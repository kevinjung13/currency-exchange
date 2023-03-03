import React from 'react'

export default function Footer() { 

  return (
    <footer>
      {/* Left side of footer */} 
      <div className='left'> 
      {/* list of icons */} 
        <ul> 
          {/* Linkedin */} 
          <li> 
            <a className="bounce" target="_blank" href="https://www.linkedin.com/in/kevin-hwisung-jung-11374a6a/">
              <i className="fa-brands fa-linkedin fa-lg"></i>
            </a>
          </li>
          {/* Twitter */}
          <li>  
            <a className="bounce" target="_blank" href="https://twitter.com/kevinhjung93">
              <i className="fa-brands fa-twitter fa-lg"></i>
            </a>
          </li>
          {/* Email */} 
          <li> 
            <a className="bounce" target="_blank" href="mailto:kevinjung13@gmail.com">
              <i className="fa-solid fa-envelope fa-lg"></i>
            </a>
          </li>
        </ul>
      </div>
      {/* Right side of footer */} 
      <div className='right'> 
        <p className='creator'>Created & Designed by Kevin Jung</p>
      </div>
  </footer>
)
}