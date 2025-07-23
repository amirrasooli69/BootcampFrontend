const BASE_URL = "https://api.coingecko.com/api/v3"
const API_KEY = "CG-UM68w2ddFu3TcGHAb97BvMkR	"
const getCoinList= (page, currency) => {
    return `${BASE_URL}/coins/markets?vs_currency=${currency}&x_cg_demo_api_key=${API_KEY}&per_page=20&page=${page}`
}

const searchCoin = query => `${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${API_KEY}`

const marketChart = coin => `${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7`

export {getCoinList, searchCoin, marketChart}