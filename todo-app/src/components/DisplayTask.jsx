import React from 'react'

export default function DisplayTask() {
    return (
        <div>
            <div className="card mt-2 shadow border-0 mx-auto" style={{ maxWidth: "1200px", height: "55vh" }}>
                <div className="card-body">
                    <h4 className="mb-3">Your Tasks</h4>

                    <div className="d-flex justify-content-between align-items-center border rounded p-3 mb-2">
                        <div>
                            <h6 className="mb-1">Complete React Project</h6>
                            <span className="badge bg-danger">High</span>
                        </div>

                        <div className="d-flex gap-2">
                            <button className="btn btn-warning btn-sm">
                                Edit
                            </button>
                            <button className="btn btn-danger btn-sm">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </div >)
}
