// import styles from "../components/todoAdd.module.css";

import { useState } from "react";
import { IoAddCircle } from "react-icons/io5";

const Addtodo=({onClickHendler})=>{
  const [inputDate,setInputDate]=useState("");
  const [inputText,setInputText]=useState("");
   function handleClick(event) {
     if (event.target.value!== null) {
         setInputText(event.target.value);  
          // console.log("InputText is",inputText);
    }
  }
  function handleChange(event){
          
          setInputDate(event.target.value);
          // console.log(inputDate);

  }
  const onClickadd=()=>{
    onClickHendler(inputText,inputDate);
    // setInputDate("");
    // setInputText("");
  }

    return <><div className="container text-center">
  <div className="row">
    <div className="col">
     <input typr="text" name="val1" onChange={handleClick}></input>
    </div>
    <div className="col">
      <input type="date" name="val2" onChange={handleChange}></input>
    </div>
    <div className="col">
    {/* <ul className={`${style["list-group"]}`}> */}
    {/* <button type="button" className={`btn btn-success ${style["btnadd"]}`}>Add</button> */}
    <button type="button" className="btn btn-success btnadd" onClick={onClickadd}><IoAddCircle /></button>
    </div>
  </div>
</div>
    </>
}
export default Addtodo;