const Todoitem=({todoName,todoDate})=>{
    return<><div className="container text-center">
  <div className="row">
    <div className="col">
        {todoName}
    </div>
    <div className="col">
        {todoDate}
    </div>
    <div className="col">
    <button type="button" className="btn btn-danger">Delete</button>
    </div>
  </div>
</div>
    </>
}
export default Todoitem;