import Item from "./item";
import style from "./item.module.css";

const Fooditems=({items})=>{
    return <>
        <ul className={`${style["list-group"]}`}>
        {items.map((item)=>(
        // <li  key={item} className="list-group-item">{item}</li>
        <Item key={item} fooditems={item}></Item>
        ))}
        
      </ul>
    </>
}
export default Fooditems;