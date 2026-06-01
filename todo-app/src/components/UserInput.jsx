import React from 'react'

export default function UserInput() {
    return (
        <div className="container py-5">
            <div
                className="card shadow-lg border-0 mx-auto"
                style={{ maxWidth: "900px" }}
            >
                <div className="card-body p-4">
                    <h2 className="text-center fw-bold mb-4">
                        📝 Task Manager
                    </h2>

                    <div className="row g-3 align-items-center">
                        {/* Task Input */}
                        <div className="col-md-5">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your task..."
                            />
                        </div>

                        {/* Priority */}
                        <div className="col-md-4">
                            <select className="form-select">
                                <option value="">Select Priority</option>
                                <option value="High">🔴 High</option>
                                <option value="Normal">🟡 Normal</option>
                                <option value="Low">🟢 Low</option>
                            </select>
                        </div>

                        {/* Button */}
                        <div className="col-md-3">
                            <button className="btn btn-primary w-100">
                                + Add Task
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        )
}
