
export const Navbar = () => {
    return (
        <>
            <div className=" container  mt-2">

                <h2 className="text-white">
                    {"<Gaurav/>"}
                </h2>
                <ul className="nav nav-tabs d-flex justify-content-end text-black">

                    <li className="nav-item">
                        <a className="nav-link" href="#">HOMES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">TOOLS AND SKILLS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">FEATURED PROJECTS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">ALL PROJECTS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">CONTACT ME</a>
                    </li>

                </ul>
            </div>
        </>
    )
}