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

                    <div className="container text-start text-secondary">
                        © 2025 Company, Inc
                    </div>

                    <div className="w-100  d-flex justify-content-evenly">
                        <div class="spinner-grow text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-secondary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-success" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-danger" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-warning" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-info" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-light" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-dark" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>

                    <div className=" container text-end">
                        <i className="ri-github-fill  text-primary  fs-2 "> <a href="https://github.com/gaurav707270"></a></i>
                        <i className="ri-instagram-fill  text-primary m-1 fs-2"><a href="#"></a></i>
                        <i className="ri-linkedin-fill  text-primary m-1 fs-2"><a href="https://www.linkedin.com/in/kharategaurav7072/"></a></i>
                    </div>


                </div>
            </div>
        </>
    )
}