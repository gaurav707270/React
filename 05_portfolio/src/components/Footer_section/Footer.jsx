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

                <div>
                    <p className=" container text-end">
                        <i className="ri-github-fill  text-primary  fs-2 "> <a href="#"></a></i>
                        <i className="ri-instagram-fill  text-primary m-1 fs-2"><a href="#"></a></i>
                        <i className="ri-linkedin-fill  text-primary m-1 fs-2"><a href="#"></a></i>
                    </p>
                </div>
            </div>
        </>
    )
}