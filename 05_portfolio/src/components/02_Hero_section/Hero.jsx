
import profile from '../../assets/gaurav.jpg'

export const Hero = () => {
    return (
        <>
            <div className="container mt-4 ">
                <div className="w-100 d-flex justify-content-center rounded-circle   ">

                    <img className='rounded-circle border border-3 border-primary' src={profile} style={{ height: 250, width: 250 }} alt="" />
                </div>

                <div>
                    <div className='text-center'>
                        <h1 className='text-center text-light'>Hi, I'm Gaurav</h1>
                        <h3 className='text-center text-light mt-3'>A fullstack developer</h3>

                        <p className=" text-center">
                            <i className="ri-github-fill  text-light  fs-2 "> <a href="https://github.com/gaurav707270"></a></i>
                            <i className="ri-instagram-fill  text-light m-1 fs-2"><a href="#"></a></i>
                            <i className="ri-linkedin-fill  text-light m-1 fs-2"><a href="https://www.linkedin.com/in/kharategaurav7072/"></a></i>
                        </p>

                        <div className='text-center text-light d-flex justify-content-center' >
                            <p className='w-50 text-secondary'>I enjoy solving complex problems. Frequently praised as detail-oriented by my peers, I can be relied upon to help your company achieve its goals by providing sustainable and scalable solutions.</p>
                        </div>
                        <div>
                            <button type="button" className="btn btn-primary m-1"><i className="ri-question-answer-line m-1"></i>GET IN TOUCH </button>
                            <button type="button" className="btn btn-secondary m-1"><i className="ri-contract-left-right-line m-1"></i>SEE MY WORK</button>
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