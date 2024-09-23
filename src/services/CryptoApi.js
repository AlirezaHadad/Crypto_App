const BASE_URL = "https://api.coingecko.com/api/v3"
const API_KEY = "CG-BtAi1b3qS55KpDmBMjvzApD4"

const getCionList = (page,currency)=> `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_des&per_page=20&page=${page}x-cg-pro-api-key=${API_KEY}`

const SearchCoin = query => `${BASE_URL}/search?query=${query}&x-cg-pro-api-key=${API_KEY}`

const marketChart = coin => `${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7`

export  {getCionList,SearchCoin,marketChart}