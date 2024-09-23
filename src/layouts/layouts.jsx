import styles from "./layouts..module.css"

const Layouts = ({children})=>{
    return(
        <>
        <header className={styles.header}>
            <h1>Crypto App</h1>
            <p><span>Alireza Hadad</span> | React.js</p>
        </header>
        {children}
        <footer className={styles.footer}>
            <p>Developed by Alireza Hadad</p> 
        </footer>
        </>
    )
}
export default Layouts