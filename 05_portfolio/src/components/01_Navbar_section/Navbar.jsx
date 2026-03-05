import "./Navbar.css";

export const Navbar = () => {
    return (
        <>
            <div className=" container  mt-2 d-none d-lg-block  ">

                <h2 className=" bg-white px-2">
                    <div className="spinner-border spinner-border-sm  " role="status">
                        <span className="visually-hidden  ">Loading...</span>
                    </div>
                    <div className="spinner-grow spinner-grow-sm" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    {"<Gaurav/>"}
                    <div className="spinner-border spinner-border-sm  " role="status">
                        <span className="visually-hidden ">Loading...</span>
                    </div>
                    <div className="spinner-grow spinner-grow-sm" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>

                </h2>
                <ul className=" navbar nav nav-tabs d-flex justify-content-end text-black">

                    <li className="nav-item">
                        <a className="nav-link" href="#">HOMES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">EDUCTION</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> SKILLS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> PROJECTS</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">CONTACT </a>
                    </li>

                </ul>
            </div>
        </>
    )
}