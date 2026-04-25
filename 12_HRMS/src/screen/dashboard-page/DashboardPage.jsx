export default function Dashboard() {
  return (
    <div className="container mt-4">

      {/* Header */}
      <div className="mb-4">
        <h3 className="fw-bold">Dashboard</h3>
        <p className="text-muted mb-0">Welcome back, Admin</p>
      </div>

      {/* Stats Cards */}
      <div className="row g-4">

        <div className="col-md-4">
          <div className="card border-0 shadow-sm p-3">
            <h6 className="text-muted">Total Employees</h6>
            <h2 className="fw-bold mb-0">10</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm p-3">
            <h6 className="text-muted">Present Today</h6>
            <h2 className="fw-bold mb-0">7</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm p-3">
            <h6 className="text-muted">On Leave</h6>
            <h2 className="fw-bold mb-0">2</h2>
          </div>
        </div>

      </div>

      {/* Table Section */}
      <div className="card mt-4 shadow-sm border-0">
        <div className="card-body">
          <h5 className="mb-3">Recent Employees</h5>

          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>John Doe</td>
                <td>john@gmail.com</td>
                <td><span className="badge bg-success">Active</span></td>
              </tr>

              <tr>
                <td>Jane Smith</td>
                <td>jane@gmail.com</td>
                <td><span className="badge bg-warning text-dark">On Leave</span></td>
              </tr>

              <tr>
                <td>Michael</td>
                <td>michael@gmail.com</td>
                <td><span className="badge bg-success">Active</span></td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
}