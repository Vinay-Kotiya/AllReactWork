// import iconbird from "./icon-bird.jpg";
import foodimg1 from "../assets/images.jpg";
import foodimg2 from "../assets/images2.jpg";
import styles from "./Wellbe.module.css"
const Wellbe=({items})=>{
    return<>
      <p className={styles.par}>To be saster like humming bird you want to do runing,yoga,cardio,and other
           physical activite to well being,and leav fast food and funk food. and eat  foods like 
            {items.map((item)=><span key={item}>  {item}, </span>)} Banana and all healthy food</p>
          
        {/* <img className={styles.wellimg} src={iconbird}/> */}
        <img className={styles.wellimg} src={foodimg1}/>
        <img className={styles.wellimg} src={foodimg2}/>
    </>
}
export default Wellbe;