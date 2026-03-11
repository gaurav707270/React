export const Footer = () => {
    return (
        <>
            <div>
                <div className=" container w-50 d-flex justify-content-evenly">
                    <a className="text-decoration-none fs-4" href="#"> Home</a>
                    <a className="text-decoration-none fs-4" href="#"> About</a>
                    <a className="text-decoration-none fs-4" href="#"> Education</a>
                    <a className="text-decoration-none fs-4" href="#"> Skills</a>
                    <a className="text-decoration-none fs-4" href="#"> Projects</a>
                    <a className="text-decoration-none fs-4" href="#"> content</a>
                </div>

                <div>
                    < hr className=' container border border-3 border-primary w-75 ' />
                </div>

                <div className="d-flex container">

                    <div className="container text-start text-white fs-4">
                        © 2025 Company, Inc
                    </div>

                    <div className="w-100  d-flex justify-content-evenly">
                        <div className="spinner-grow text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-danger" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-info" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-dark" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>

                    <div className=" container text-end">
                        <p>

                            <a className="text-decoration-none" href="https://github.com/gaurav707270" target="_blank">
                                <i className="ri-github-fill text-light fs-2"></i>
                            </a>

                            <a className="text-decoration-none" href="https://www.instagram.com/" target="_blank">
                                <i className="ri-instagram-fill text-light m-1 fs-2"></i>
                            </a>

                            <a className="text-decoration-none" href="https://www.linkedin.com/in/kharategaurav7072/" target="_blank">
                                <i className="ri-linkedin-fill text-light m-1 fs-2"></i>
                            </a>

                        </p>
                    </div>


                </div>
            </div>
        </>
    )
}