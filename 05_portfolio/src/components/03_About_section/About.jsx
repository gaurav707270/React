import profile from '../../assets/about.png'

export const About = () => {
    return (
        <>
            <section id="about" className="py-5 ">
                <div className="container">
                    <h2 className="mb-3 text-primary text-center fs-2">About Me</h2>

                    <div className="row align-items-center">

                        <div className="col-md-5 text-center">
                            <img className='rounded-4 border border-3 border-primary' src={profile} style={{ height: 250, width: 250 }} alt="" />
                        </div>


                        <div className="col-md-7">

                            <p className=' text-white gap-4 fs-5'>
                                Hi, I'm <strong>Gaurav Kharate</strong>, a passionate Frontend Developer who enjoys
                                building modern and responsive web applications. I specialize in creating
                                interactive user interfaces using technologies like
                                <strong>React, JavaScript, HTML, CSS and bootstrap</strong>.
                            </p>

                            <p className=' text-white gap-4 fs-5'>
                                I love turning ideas into real web experiences and continuously improving
                                my development skills. My focus is on clean code, responsive design, and
                                building reusable components.
                            </p>

                            <a href="#contact" className="btn btn-primary mt-3 w-25 py-2 ">Contact Me</a>
                        </div>

                    </div>
                </div>
            </section>

            <div>
                < hr className=' container border border-3 border-primary ' />
            </div>
        </>
    )
}
