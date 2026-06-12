import React from 'react'

export default function Home() {
  return (
    <div>
      <div className="d-flex align-items-center vh-100 p-5">
        <div>
          <h1 >
            Kharate Gaurav
          </h1>

          <p className='p-3 fs-5'>
            Frontend Developer & React Developer. I create modern,
            responsive and user-friendly web applications with clean
            design and efficient code.
          </p>

          <div className="d-flex gap-5 mt-5">
            <a
              href="https://x.com" className="text-dark text-decoration-none" >
              X (Twitter)
            </a>

            <a
              href="https://github.com/gaurav707270" className="text-dark text-decoration-none" >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kharategaurav7072/" className="text-dark text-decoration-none">
              LinkedIn
            </a>

            <a
              href="mailto:yourmail@gmail.com" className="text-dark text-decoration-none">
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
