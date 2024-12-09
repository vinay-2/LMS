import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function UDasboard() {
  return (
    <div className="container-fluid mt-5">
        <div className="row">
            {/* Sidebar */}
            <div className="col-md-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Dashboard</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link className="nav-link" to="/Mycourses">My Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/favoriteCourses">Favourite Courses</Link>
                            </li>
                            <li className="nav-item">
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/recommendedCourses">Recommended Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Profilesetting">Profile Setting</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/changePassword">Change Password</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-danger" to="/uLogout">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="col-md-9">
                <h3>My Courses</h3>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Created By</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><button className="btn btn-dark">Delete</button></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><button className='btn btn-dark'>Delete</button></td>
                        </tr>
                        
                        


                    </tbody>
                </table>

                {/* Render additional dashboard routes here */}
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default UDasboard;