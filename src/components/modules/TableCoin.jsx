
import TableRow from "./TableRow";

import { Hourglass } from "react-loader-spinner";

import styles from "./TableCoin.module.css"

const TableCoin = ({ coins , isLoading , setChart}) => {
    // console.log(cions)
    return(
        <>
        <div className={styles.container}>
        {isLoading ? (
            <Hourglass />
        ) :
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Cion</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>24h</th>
                        <th>Total Volume</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map((coin) => (
                        <TableRow coin={coin} key={coin.id} setChart={setChart} />
                    ))}
                </tbody>
            </table>
        }
        </div>
        </>
    )
}
export default TableCoin