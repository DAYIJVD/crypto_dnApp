const BASE_URL="https://api.coingecko.com/api/v3";
const KEY_API="CG-zD8b9iCSTAaapPADs4Lvs2Vm";


const getCoinsData=async(page)=>{
    const res=await fetch(`${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${KEY_API}`)
    const data=await res.json();
    return data
}
const getCoinsDataAll=async()=>{
    const res=await fetch(`${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&x_cg_demo_api_key=${KEY_API}`)
    const data=await res.json();
    return data
}
const getMarketChartCoin=async(id)=>{
    
    const res=await fetch(`${BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=7&x_cg_demo_api_key=${KEY_API}`)
    const data=await res.json();
    return data
}


export {
    getCoinsData,
    getMarketChartCoin,
    getCoinsDataAll
}