import chartUp from "../../assets/chart-up.svg"
import chartDown from "../../assets/chart-down.svg"

import styles from "./TableRow.module.css"
import { marketChart } from "../../services/CryptoApi"

const TableRow = ({coin,setChart}) => {
    const{id,
        name,
        image,
        symbol,
        total_volume,
        current_price,
        price_change_percentage_24h} = coin;
    const showHandler = async ()=> {
        try {
            const res = await fetch(marketChart(coin.id));
            const json = await res.json();
            console.log(json);
            setChart({...json,coin})
        } catch (error) {
            setChart(null)
        }
    }
    return(
        <tr>
            <td>
                <div onClick={showHandler} className={styles.symbol}>
                    <img src={coin.image} />
                    <span>{coin.symbol.toUpperCase()}</span>
                </div>
            </td>
            <td>{coin.name}</td>
            <td>${coin.current_price.toLocaleString()}</td>
            <td className={coin.price_change_percentage_24h > 0 ? styles.green : styles.red}>{coin.price_change_percentage_24h.toFixed(2)}%</td>
            <td>{coin.total_volume.toLocaleString()}</td>
            <td><img src={coin.price_change_percentage_24h > 0 ? chartUp : chartDown} alt="" /></td>
        </tr>
    )
}
export default TableRow;