import styles from './Hero.module.css';
const Hero=()=>{
    return (
        <div className={styles.main}>
        <h1 className={styles.heading}>CONTACT US</h1>
        <p className={styles.pare}>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
        <div className={styles.formbox}>
            <button className={styles.viabtn}>VIA SUPPORT CHAT</button>
            <button className={styles.viabtn}>VIA CALL</button>
        </div>
        </div>
    )
}
export default Hero;