import React from 'react'

export default function UserInput() {
    return (
        <div>
            <div className='container vh-100 '>
                <div className='w-100'>
                    <form className='d-flex w-60  justify-content-center justify-content-between'>
                        <div className="mb-3 ">
                            <label htmlFor="exampleInputEmail1" className="form-label text-white">
                                add task
                            </label>
                            <input style={{ width: "350px" }}
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />

                        </div>
                        <div>
                            <label htmlFor="exampleInputEmail1" className="form-label text-white">
                                add Priority
                            </label>

                            <select style={{ width: "350px" }}
                                className="form-select"
                                aria-label="Default select example"
                                id="todo_priority"
                                value=""
                            >
                                <option selected="" value="Default">
                                    select priority
                                </option>
                                <option value="high">high</option>
                                <option value="medium">medium</option>
                                <option value="low">low</option>
                            </select>
                        </div>


                        <div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>


                </div>

            </div>
        </div>
    )
}
