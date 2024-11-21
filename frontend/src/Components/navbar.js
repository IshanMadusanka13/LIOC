
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-blue-500 text-white shadow-lg">
      <div className="container-fluid">
        <a className="navbar-brand text-white font-bold" href="#">Fuel Management</a>
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#team">Team</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-warning text-blue-500" href="/dashboard">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-warning text-blue-500" href="/register">Sign Up</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
