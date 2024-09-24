import styles from "./Navbar.module.css"
// import nikelogo from "./nike-3-logo.svg"
import nikelogo from "./nike-11.svg"
// import Menu from "./Menu"
// import {
//     BrowserRouter as Router, Routes,
//     Route
// } from "react-router-dom";



const Navbar=()=>{
    return <nav><span  className={styles.span}><img src={nikelogo}></img></span>
    <ul>
        {/* <Router>
            <Routes> */}
            <li ><a className={styles.items} href="#">MENU</a></li>
            <li ><a className={styles.items} href="#">LOCATION</a></li>
            <li ><a className={styles.items} href="#">ABOUT</a></li>
            <li ><a className={styles.items} href="#">CONTECT</a></li>
            
          
            {/* </Routes>
        </Router> */}
     </ul>
            <button  className={styles.button}>Login</button>
    </nav>
}
export default Navbar;