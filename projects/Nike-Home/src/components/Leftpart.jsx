import styles from "./Leftpart.module.css"
import flipkart from "./flipkart-icon.svg"
import amazon from "./amazon.svg"
const Leftpart=()=>{
    return <>
            <div className={styles.Leftpart}>
                        <h1>YOUR FEET DESERVE THE BEST</h1>
                        <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP TOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP TOU WITH OUR SHOES</p>
                       <div className={styles.btncon}> <button className={styles.button}>Shop Now</button> <button className={styles.button2}>Category</button> </div>
                        <p>Also Available On</p>
                        <div className={styles.btncon}>
                            <img src={flipkart}></img>
                            <img src={amazon}></img>

                        </div>
            </div>
    </>
}
export default Leftpart;