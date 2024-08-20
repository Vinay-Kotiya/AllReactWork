import Todoitem from "./todoitem";
function Todoitems({todoItems}){
    return <>
    {/* {todoItem.map(item)=>{<Todoitem todoDate="14/08/2024" todoName="Buy Milk"></Todoitem>}} */}
    {todoItems.map((item)=>(
        <Todoitem key={item.name}todoDate={item.dueDate} todoName={item.name}></Todoitem>
        ))}
    </>
}
export default Todoitems;