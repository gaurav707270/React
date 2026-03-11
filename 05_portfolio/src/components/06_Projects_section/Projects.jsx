import Pisco from "../../assets/Pisco.com.png";
import Gussing from "../../assets/Number Guessing Game.png";
import Byu from "../../assets/byu you thing.png";
import BMI from "../../assets/BMI Calculator.png";
import Utils from "../../assets/Text-Utils Example.png";
import Todu from "../../assets/Todu list.png";


export const Projects = () => {
    return (
        <>
            <div className='container' id="projects" >
                <h2 className=" text-primary text-center m-3"> Projects</h2>

                <div className='d-flex justify-content-evenly row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
                    <div className="m-2 text-center border border-2 border border-primary p-2 rounded rounded-4"  >
                        <img className=" rounded rounded-3" style={{ width: 300 }} src={Pisco} alt="" />
                        <h3 className="text-light mt-1">Pecso E-Commerce Website</h3>
                        <p className="text-white">An online shopping website where users can browse products and add items to a cart in a simple and responsive interface.</p>
                        <a className="text-decoration-none btn btn-outline-primary mt-4" href="https://github.com/gaurav707270/Bootstrap-JS-Projects/tree/main/bootstrap%20pisco%20E-commerce%20website">project code sorce</a>
                    </div>

                    <div className="m-2 text-center border border-2 border border-primary p-2 rounded rounded-4"  >
                        <img className=" rounded rounded-3" style={{ width: 300 }} src={Gussing} alt="" />
                        <h3 className="text-light mt-1 px-1"> Number Guessing Game</h3>
                        <p className="text-white ">A fun interactive game where players guess a randomly generated number with hints to reach the correct answer.</p>
                        <a className="text-decoration-none btn btn-outline-primary mt-4" href="https://github.com/gaurav707270/Bootstrap-JS-Projects/tree/main/Number%20Gussing%20Game">project code sorce</a>
                    </div>
                    <div className="m-2 text-center border border-2 border border-primary p-2 rounded rounded-4"  >
                        <img className=" rounded rounded-3" style={{ width: 300 }} src={Byu} alt="" />
                        <h3 className="text-light mt-1">Buy You Thing  E-Commerce </h3>
                        <p className="text-white">An online shopping website where users can browse products, view details, and add items to the cart, providing a simple and user-friendly digital shopping experience.</p>
                        <a className="text-decoration-none btn btn-outline-primary" href="https://github.com/gaurav707270/Bootstrap-JS-Projects/tree/main/new%20E-commerce%20website">project code sorce</a>
                    </div>

                    <div className="m-2 text-center mt-3 border border-2 border border-primary p-2 rounded rounded-4"  >
                        <img className=" rounded rounded-3" style={{ width: 300 }} src={BMI} alt="" />
                        <h3 className="text-light mt-1"> BMI Calculator App</h3>
                        <p className="text-white">A simple app that calculates Body Mass Index (BMI) using height and weight to help users quickly check their health status.</p>
                        <a className="text-decoration-none btn btn-outline-primary mt-4" href="https://github.com/gaurav707270/Bootstrap-JS-Projects/tree/main/BMI%20calculator%20app">project code sorce</a>
                    </div>

                    <div className="m-2 text-center mt-3 border border-2 border border-primary p-2 rounded rounded-4"  >
                        <img className=" rounded rounded-3" style={{ width: 300 }} src={Utils} alt="" />
                        <h3 className="text-light mt-1">Text Utils Tool</h3>
                        <p className="text-white">A text processing tool that performs operations like converting case, removing extra spaces, and counting words and characters.</p>
                        <a className="text-decoration-none btn btn-outline-primary" href="https://github.com/gaurav707270/React/tree/main/04_TextUtils">project code sorce</a>
                    </div>

                    <div className="m-2 text-center mt-3 border border-2 border border-primary p-2 rounded rounded-4"  >
                        <img className=" rounded rounded-3 shadow " style={{ width: 300 }} src={Todu} alt="" />
                        <h3 className="text-light mt-1">Task Manager App</h3>
                        <p className="text-white">A task management app that helps users add, track, and complete daily tasks efficiently.</p>
                        <a className="text-decoration-none btn btn-outline-primary mt-4" href="https://github.com/gaurav707270/Bootstrap-JS-Projects/tree/main/Todo%20app">project code sorce</a>
                    </div>


                </div>

                <div>
                    < hr className=' container border border-3 border-primary ' />
                </div>

            </div >

        </>

    )
}
