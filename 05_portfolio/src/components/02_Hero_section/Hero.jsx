
import profile from '../../assets/gaurav.jpg'

export const Hero = () => {
    return (
        <>
            <div className="container mt-4 " id="home" >
                <div className="w-100 d-flex justify-content-center rounded-circle   ">

                    <img className='rounded-circle border border-3 border-primary' src={profile} style={{ height: 250, width: 250 }} alt="" />
                </div>

                <div>
                    <div className='text-center'>
                        <h1 className='text-center text-light'>Hi, I'm Gaurav</h1>
                        <h3 className='text-center text-light mt-3'>A fullstack developer</h3>

                        <p className="text-center ">

                            <a class="text-decoration-none" href="https://github.com/gaurav707270" target="_blank">
                                <i className="ri-github-fill text-light fs-2"></i>
                            </a>

                            <a class="text-decoration-none" href="https://www.instagram.com/" target="_blank">
                                <i className="ri-instagram-fill text-light m-1 fs-2"></i>
                            </a>

                            <a class="text-decoration-none" href="https://www.linkedin.com/in/kharategaurav7072/" target="_blank">
                                <i className="ri-linkedin-fill text-light m-1 fs-2"></i>
                            </a>

                        </p>

                        <div className='text-center text-light d-flex justify-content-center' >
                            <p className='w-50 text-secondary'>I enjoy solving complex problems. Frequently praised as detail-oriented by my peers, I can be relied upon to help your company achieve its goals by providing sustainable and scalable solutions.</p>
                        </div>
                        <div>
                            <button type="button" className="btn btn-primary m-1"><i className="ri-question-answer-line m-1"  ></i> <a className='text-decoration-none text-white' href="#contact">GET IN TOUCH</a> </button>
                            <button type="button" className="btn btn-secondary m-1"><i className="ri-contract-left-right-line m-1" ><a className='text-decoration-none text-white' href="#projects">SEE MY WORK</a></i></button>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                < hr className=' container border border-3 border-primary ' />
            </div>

        </>
    )
}