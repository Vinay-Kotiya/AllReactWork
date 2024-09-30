import styles from './Navbar.module.css'
import nikelogo from './nike-11.svg'
const Navbar=()=>{
    return (
        <div  className={styles.navc}>
        <span className={styles.logo}><img src={nikelogo}/></span>
        </div>
    )
}
export default Navbar;