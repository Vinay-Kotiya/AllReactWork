import styles from "./item.module.css";
const Item=({fooditems})=>{
    const heandlerbuybutton=(event)=>{
        console.log(event);
        console.log(`${fooditems}  Button has clicked`);

    }
   
    return <>
       <hr></hr>
      
        <li className={`list-group-item`}>
        <span>  {fooditems}
        <button className={styles.button} onKeyDown={(event)=>heandlerbuybutton(event)}>Buy</button>
        </span>
        </li>
        {/* className={`${style["list-group"]}`} */}
    </>
};
export default Item;