// import styles from "../components/todoAdd.module.css";

const Addtodo=()=>{
    return <><div className="container text-center">
  <div className="row">
    <div className="col">
     <input typr="text"></input>
    </div>
    <div className="col">
      <input type="date"></input>
    </div>
    <div className="col">
    {/* <ul className={`${style["list-group"]}`}> */}
    {/* <button type="button" className={`btn btn-success ${style["btnadd"]}`}>Add</button> */}
    <button type="button" className="btn btn-success btnadd">Add</button>
    </div>
  </div>
</div>
    </>
}
export default Addtodo;