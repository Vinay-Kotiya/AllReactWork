import Item from "./item";
import style from "./item.module.css";

const Fooditems=({items})=>{
  const onBuyButton=(event)=>{
    console.log(event);
    console.log(`${fooditems}  Button has clicked`);
    // document.body.style.backgroundColor = "red";
}
    return <>
        <ul className={`${style["list-group"]}`}>
        {items.map((item)=>(
        // <li  key={item} className="list-group-item">{item}</li>
        <Item key={item} fooditems={item} heandlerbuybutton={(event)=>onBuyButton} ></Item>
      
        ))}
      </ul>
    </>
}
export default Fooditems;