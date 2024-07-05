import poitive from '../../assets/chart-up.svg'
import negative from '../../assets/chart-down.svg'
import { getMarketChartCoin } from '../../services/coinApi';

const Coin = ({coin,setShowModal,setDatahchart}) => {
    
    return (
        <>
           <tr className="bg-black-50 text-center transition-all duration-500 ">
                               <td className=" px-5 flex justify-center  py-5">
                                  <div className="w-9  ">
                                      <img  onClick={async() => {
                                        setShowModal(true)
                                        const dataCoin=await getMarketChartCoin(coin.id);
                                       setDatahchart({data:dataCoin,coin:coin});
                                      }} src={coin.image} className="rounded-full"  style={{cursor:"pointer"}} alt="Floyd image"/>
                              
                                  </div>
                              </td>
                              <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium   "> {coin.id}</td>
                              <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium  ">$ {new Intl.NumberFormat('en-US', {style : "decimal" }).format(coin.current_price)}</td>
                             
                              <td style={coin.price_change_percentage_24h>0?{color:"green"}:{color:"red"}} className="p-5 whitespace-nowrap text-sm leading-6 font-medium  "> {coin.price_change_percentage_24h.toFixed(2)}%</td>
                              <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium  "> $ {new Intl.NumberFormat('en-US', {style : "decimal" }).format(coin.total_volume)}</td>
                              <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-center  "><img src={coin.price_change_percentage_24h>0?poitive:negative} alt='ll'/> </td>    
            </tr>    
            
        </>
    );
}

export default Coin;
