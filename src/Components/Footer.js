import React from 'react'

export default function Footer() { 

  return (
    <footer>
      <div className='left'> {/* Left side of footer */} 
      <ul> {/* list of icons */} 
          <li> {/* Linkedin */} 
            <a className="bounce" target="_blank" href="https://www.linkedin.com/in/kevin-hwisung-jung-11374a6a/">
              <i className="fa-brands fa-linkedin fa-lg"></i>
            </a>
          </li>
          <li> {/* Twitter */} 
            <a className="bounce" target="_blank" href="https://twitter.com/kevinhjung93">
              <i className="fa-brands fa-twitter fa-lg"></i>
            </a>
          </li>
          <li> {/* Email */} 
            <a className="bounce" target="_blank" href="mailto:kevinjung13@gmail.com">
              <i className="fa-solid fa-envelope fa-lg"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className='right'> {/* Right side of footer */} 
        <p>Created & Designed by Kevin Jung</p>
      </div>
  </footer>
)
}