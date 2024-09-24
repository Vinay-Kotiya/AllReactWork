import { MdDeleteForever } from "react-icons/md";
import styles from "./todoitem.module.css";
const Todoitem=({todoName,todoDate,deleteHendler})=>{
 
    return<><div className={`container text-center`}>
  <div className="row">
    <div className={`col ${styles["column"]}`}>
        {todoName}
    </div>
    <div className={`col ${styles["column"]}`}>
        {todoDate}
    </div>
    <div className={`col`}>
    <button type="button" className={`btn btn-danger  ${styles["deletebutton"]}`} onClick={()=>deleteHendler(todoName)}><MdDeleteForever /></button>
    </div>
  </div>
</div>
    </>
}
export default Todoitem;