import styles from './app.module.css'
import Display from './components/Display'

function App() {
  const buttonitems=["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."]
  function onClickHendler(buttonText){
    console.log(buttonText+" Button has clicked");
  }
  
  return (
    <><center>
      <h1>This is a Calculator</h1>
      <div className={styles.calculator}>
       <Display displayValue={7714}></Display>
        <div className={styles.btncon}>
        {buttonitems.map(item=><button key={item} onClick={onClickHendler(buttonitems)}>{item}</button>)}
        </div>
      </div>
      </center>
    </>
  )
}

export default App
