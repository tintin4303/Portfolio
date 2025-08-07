function Navbar() {
  return (
    <nav className="navbar">
      <div className="container justify-content-end p-0 pt-2">
        <ul className="nav">
          <li className="nav-item"><a className="nav-link" href="#about-me">About Me</a></li>
          <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
