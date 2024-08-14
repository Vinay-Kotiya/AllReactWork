let Currenttime=()=>{
    let currentTime = new Date();
    return  <p>This is the current time:{currentTime.toLocaleDateString()}-{currentTime.toLocaleTimeString()}</p>
}
export default Currenttime;