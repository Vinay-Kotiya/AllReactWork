import styles from "./Rightpart.module.css"
import shoes from "./pngwing.png"
const Rightpart=()=>{
    return<>{
        <div className={styles.Rightpart}> 
        <img src={shoes} className={styles.img}></img></div>
    }</>
}
export default Rightpart;