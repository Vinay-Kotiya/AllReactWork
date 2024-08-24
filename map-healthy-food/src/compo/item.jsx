import styles from "./item.module.css";
const Item=({fooditems,onBuyButton})=>{
   
   
    return <>
       <hr></hr>
        <li className={`list-group-item`}>
        <span>  {fooditems}
        <button className={styles.button} onClick={onBuyButton}>Buy</button>
        </span>
        </li>
        {/* className={`${style["list-group"]}`} */}
    </>                                     
};
export default Item;