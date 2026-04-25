export default function Attendance() {
    return (
        <div className="container mt-4">

            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="fw-bold mb-0">Attendance</h4>
                <span className="text-muted">Today</span>
            </div>

            {/* Table Card */}
            <div className="card shadow-sm border-0">
                <div className="card-body">

                    <table className="table align-middle table-hover">
                        <thead className="table-light">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>
                                    <span className="badge bg-success">Present</span>
                                </td>
                                <td>
                                    <button className="btn btn-outline-success btn-sm">
                                        Present
                                    </button>
                                    <button className="btn btn-outline-danger btn-sm ms-2">
                                        Absent
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Jane Smith</td>
                                <td>
                                    <span className="badge bg-danger">Absent</span>
                                </td>
                                <td>
                                    <button className="btn btn-outline-success btn-sm">
                                        Present
                                    </button>
                                    <button className="btn btn-outline-danger btn-sm ms-2">
                                        Absent
                                    </button>
                                </td>
                            </tr>

                        </tbody>

                    </table>

                </div>
            </div>

        </div>
    );
}