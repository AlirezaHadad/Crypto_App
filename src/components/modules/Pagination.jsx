import { useState } from "react";
import styles from "./Pagination.module.css"

const Pagination = ({page,setPage})=>{
    // const [page ,setPage] = useState(1)

    const previousHandler = () => {
        if(page <= 1) return;
        setPage((page) => page -1)
    }

    const nextHandler = () => {
        if(page >= 10 ) return;
        setPage((page) => page +1)
    }

    return(
        <div className={styles.pagination}>
            <button className={page == 1 ? styles.disabled : null} onClick={previousHandler}>previous</button>
                <p className={page == 1 ? styles.selected : null}>1</p>
                <p className={page == 2 ? styles.selected : null}>2</p>
                    {page >2 && page < 9 && (
                        <>
                            <span className={styles.selected}>{page}</span>
                        </>
                    )}
                <p className={page == 9 ? styles.selected : null}>9</p>
                <p className={page == 10 ? styles.selected : null}>10</p>
            <button className={page == 10 ? styles.disabled : null} onClick={nextHandler}>next</button>
        </div>
    )
}
export default Pagination;