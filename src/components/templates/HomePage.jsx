import { useEffect , useState} from "react"
import TableCoin from "../modules/TableCoin";
import { getCionList } from "../../services/CryptoApi";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";
import Chart from "../modules/Chart";


const HomePage = ()=>{
    const[ coins ,setCoins ] = useState([])
    const[ isLoading , setisLoading ] = useState(true)
    const [page ,setPage] = useState(1)
    const [currency ,setCurrency] = useState("usd")
    const [chart ,setChart] = useState(null)

    useEffect(()=>{
        setisLoading(true)
        const Getdata = async ()=>{
            try{
            const res = await fetch(getCionList(page,currency));
            const json = await res.json()
            setCoins(json)
            setisLoading(false)
            }catch(error){
                alert(error.message)
            }
        }
        Getdata()
    },[page,currency])
    return(
        <>
        <Search currency={currency} setCurrency={setCurrency} /> 
        <TableCoin coins={coins} isLoading={isLoading} setChart={setChart}/>
        <Pagination page={page} setPage={setPage} />
        {!!chart && <Chart chart={chart} setChart={setChart} /> }
        </>
    )
}
export default HomePage;