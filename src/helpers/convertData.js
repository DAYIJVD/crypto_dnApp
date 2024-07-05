const convertDataMarketCoin=(data,type)=>{
   const Data=data[type].map(i=>{
       return{
        Date:i[0],
        [type]:Number(i[1].toFixed(5))
       }
   });
   return Data
}


export {
    convertDataMarketCoin
}