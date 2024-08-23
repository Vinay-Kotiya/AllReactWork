import styles from "./item.module.css";
const Item=({fooditems},{heandlerbuybutton})=>{
 
   
    return <>
       <hr></hr>
        <li className={`list-group-item`}>
        <span>  {fooditems}
        <button className={styles.button} onClick={heandlerbuybutton}>Buy</button>
        </span>
        </li>
        {/* className={`${style["list-group"]}`} */}
    </>
};
export default Item;