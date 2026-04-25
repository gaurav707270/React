import React, { useState, useEffect } from "react";

export default function Leaves() {
    const [leaves, setLeaves] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("leaves")) || [
            { id: 1, name: "John Doe", reason: "Sick", status: "Pending" },
            { id: 2, name: "Jane Smith", reason: "Vacation", status: "Pending" },
        ];
        setLeaves(data);
    }, []);

    const updateStatus = (id, status) => {
        const updated = leaves.map((leave) =>
            leave.id === id ? { ...leave, status } : leave
        );

        setLeaves(updated);
        localStorage.setItem("leaves", JSON.stringify(updated));
    };

    return (
        <div className="container mt-4">

            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="fw-bold mb-0">Leave Requests</h4>
                <span className="text-muted">Manage employee leaves</span>
            </div>

            {/* Table */}
            <div className="card shadow-sm border-0">
                <div className="card-body">

                    <table className="table table-hover align-middle">
                        <thead className="table-light">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Reason</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {leaves.length > 0 ? (
                                leaves.map((leave, index) => (
                                    <tr key={leave.id}>
                                        <td>{index + 1}</td>
                                        <td>{leave.name}</td>
                                        <td>{leave.reason}</td>

                                        {/* Status Badge */}
                                        <td>
                                            <span
                                                className={`badge ${leave.status === "Approved"
                                                    ? "bg-success"
                                                    : leave.status === "Rejected"
                                                        ? "bg-danger"
                                                        : "bg-warning text-dark"
                                                    }`}
                                            >
                                                {leave.status}
                                            </span>
                                        </td>

                                        {/* Actions */}
                                        <td>
                                            <button
                                                className="btn btn-outline-success btn-sm"
                                                onClick={() => updateStatus(leave.id, "Approved")}
                                            >
                                                Approve
                                            </button>

                                            <button
                                                className="btn btn-outline-danger btn-sm ms-2"
                                                onClick={() => updateStatus(leave.id, "Rejected")}
                                            >
                                                Reject
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center text-muted">
                                        No leave requests
                                    </td>
                                </tr>
                            )}
                        </tbody>

                    </table>

                </div>
            </div>

        </div>
    );
}