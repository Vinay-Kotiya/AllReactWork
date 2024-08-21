import styles from "./foodinput.module.css"
const Foodinput=(heandelrfoodinput)=>{
   
    return (<input type="text" maxLength={50} placeholder="Enter Food item" className={styles.foodinput} onChange={heandelrfoodinput}></input>);
}
export default Foodinput;