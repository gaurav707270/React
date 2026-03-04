import Project from "../../assets/projects.jpg";


export const Projects = () => {
    return (
        <>
            <div className='container'>
                <h2 className=" text-primary text-center m-3"> Projects</h2>

                <div className='d-flex justify-content-evenly row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
                    <div className="m-2" >
                        <img className=" rounded rounded-3" style={{ width: 300 }} src={Project} alt="" />
                        <h3>title</h3>
                        <p>description</p>
                        <a href="#">project link</a>
                    </div>

                    <div className="m-2" >
                        <img className=" rounded rounded-3" style={{ width: 300 }} src={Project} alt="" />
                        <h3>title</h3>
                        <p>description</p>
                        <a href="#">project link</a>
                    </div>

                    <div className="m-2" >
                        <img className=" rounded rounded-3" style={{ width: 300 }} src={Project} alt="" />
                        <h3>title</h3>
                        <p>description</p>
                        <a href="#">project link</a>
                    </div>

                    <div className="m-2" >
                        <img className=" rounded rounded-3" style={{ width: 300 }} src={Project} alt="" />
                        <h3>title</h3>
                        <p>description</p>
                        <a href="#">project link</a>
                    </div>

                    <div className="m-2" >
                        <img className=" rounded rounded-3" style={{ width: 300 }} src={Project} alt="" />
                        <h3>title</h3>
                        <p>description</p>
                        <a href="#">project link</a>
                    </div>

                    <div className="m-2" >
                        <img className=" rounded rounded-3 shadow " style={{ width: 300 }} src={Project} alt="" />
                        <h3>title</h3>
                        <p>description</p>
                        <a href="#">project link</a>
                    </div>


                </div>

                <div>
                    < hr className=' container border border-3 border-primary ' />
                </div>

            </div>

        </>

    )
}
