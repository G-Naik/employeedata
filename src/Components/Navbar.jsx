import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/admin" className="nav-link active "><h1>Logo</h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ps-5" id="navbarNav">
                    <ul className="navbar-nav d-flex justify-content-center">
                    <li className="nav-item">
                            <Link to="/admin" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin/employee" className="nav-link active">Employee</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin/create" className="nav-link active">Create User</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Logout</Link>
                        </li>
                    </ul>
                    </div>
                </div>
         </nav>
        
     );
}
 
export default Navbar;