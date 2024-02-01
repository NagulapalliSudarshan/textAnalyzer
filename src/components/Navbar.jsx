function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode} bg-${props.mode} mb-3`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Text Analyser
        </a>
      <div className={`form-check form-switch text-${props.mode==="light" ?  "dark":"light"}`}>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
        <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable {props.mode==="light" ?  "Dark":"Light"}Mode</label>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
