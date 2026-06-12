import React from 'react'

export default function Content() {
  return (
    <div className='d-flex justify-content-center align-items-center p-5'>
      <div>
        <h2>Get in Touch</h2>
        <p className='fs-5 p-3'>I'm currently available for freelance projects and consulting opportunities. Feel free to reach out if you'd like to work together.</p>
        <button href="mailto:yourmail@gmail.com" className='btn btn-success'><i className="ri-mail-line fs-4"></i>Email Me</button>
      </div>
    </div>
  )
}
