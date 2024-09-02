import styles from "./Navbar.module.css"
// import nikelogo from "./nike-3-logo.svg"
import nikelogo from "./nike-11.svg"



const Navbar=()=>{
    return <nav><span  className={styles.span}><img src={nikelogo}></img></span>
    <ul>
            <li ><a className={styles.items} href="#">MENU</a></li>
            <li ><a className={styles.items} href="#">LOCATION</a></li>
            <li ><a className={styles.items} href="#">ABOUT</a></li>
            <li ><a className={styles.items} href="#">CONTECT</a></li>
     </ul>
            <button  className={styles.button}>Login</button>
    </nav>
}
export default Navbar;