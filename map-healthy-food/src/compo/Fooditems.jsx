import Item from "./item";
import style from "./item.module.css";

const Fooditems=({items})=>{
  let onBuyButton=({item},event)=>{
    console.log(event);
    console.log(`${item}  Button has clicked`);
    // document.body.style.backgroundColor = "red";
};
    return <>
        <ul className={`${style["list-group"]}`}>
        {items.map((item)=>(
        // <li  key={item} className="list-group-item">{item}</li>
        <Item key={item} fooditems={item} onBuyButton={(event)=>onBuyButton({item},event)} ></Item>
      
        ))}
      </ul>
    </>
}
export default Fooditems;