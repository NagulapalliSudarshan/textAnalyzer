import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
      <Link className="navbar-brand" to="/">Text Analyser</Link>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>     
      </ul>

      <div className={`form-check form-switch text-${props.mode==="light" ?  "dark":"light"}`}>
         <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
        <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable {props.mode==="light" ?  "Dark":"Light"}Mode</label>
       </div>
    </div>
  </div>
</nav>
  
  );
}

export default Navbar;



// <nav className={`navbar navbar-${props.mode} bg-${props.mode} `}>
//       <div className="-fluid">
//         <a className="navbar-brand" href="/">
//           Text Analyser
//         </a>
        
//         <span>
//           hii
//         </span>

//       <div className={`form-check form-switch text-${props.mode==="light" ?  "dark":"light"}`}>
//         <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
//         <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable {props.mode==="light" ?  "Dark":"Light"}Mode</label>
//       </div>
//       </div>
//     </nav>