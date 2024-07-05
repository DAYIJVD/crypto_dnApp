/* eslint-disable react/prop-types */

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { convertDataMarketCoin } from "../../helpers/convertData";
import { useEffect, useState } from "react";



export default function Modal({setShowModal,showModal,dataChart,setDatachart}) {
    const [type,setType]=useState("prices")
  
   
  
  return (
    <>
    {showModal&&dataChart.coin? (
        <>
        
     <div
            className="justify-start   items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
          >
            <div className="relative  t-5 w-auto my-6 mx-auto max-w-3xl  ">
              {/*content*/}
              <div className="border-0  rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between bg-gray-900   p-5  border-blueGray-200 rounded-t-3xl">
               <div className="gap-2 flex items-center">
               <img className="w-10" src={dataChart.coin.image} alt="" />
               <h3>{dataChart.coin.id}</h3>
               </div>
                <div className=" gap-8 flex">
                <h3 className="m-l-5">Price: ${new Intl.NumberFormat('en-US', {style : "decimal" }).format(dataChart.coin.current_price)}</h3>
                <h3>Total Volume: ${new Intl.NumberFormat('en-US', {style : "decimal" }).format(dataChart.coin.total_volume)}</h3>
                </div>
        
                </div>
                {/*body*/}
                
                <div id="graph" className="p-10 ">
        
         <ResponsiveContainer width='100%' height='100%'>
<LineChart height={400} width={400} data={convertDataMarketCoin(dataChart.data,type)}>
<Line type="monotone" dataKey={type} stroke="#3874ff" strokeWidth='2px' />

<CartesianGrid stroke="#fff" className="opacity-10" />
<YAxis   domain={['auto','auto']}/>

<Legend/>
<Tooltip/>
</LineChart>
         </ResponsiveContainer>

     
                </div>
                {/*footer*/}
                <div className="flex items-center  bg-gray-900 justify-end p-6  border-solid border-blueGray-200 rounded-b-3xl">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() =>{
                        setShowModal(false)
                        setDatachart([])
                        setType('prices')
                    } 
                  }>
                    Close
                  </button>
                  <div className="inline-flex">
  <button onClick={()=>setType('market_caps')} className={`${type=='market_caps'?"bg-blue-900":"bg-blue-500 opacity-50"}   font-bold py-2 px-4 rounded-l`}>
  MarketCaps
  </button>
  <button onClick={()=>setType('prices')} className={`${type=='prices'?"bg-blue-900":"bg-blue-500 opacity-50"}    font-bold py-2 px-4`} >
  Prices
  </button>
  <button onClick={()=>setType('total_volumes')} className={`${type=='total_volumes'?"bg-blue-900 ":"bg-blue-500 opacity-50"}    font-bold py-2 px-4  rounded-r`} >
  TotalVolumes
  </button>
</div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-70 backdrop-blur-sm  fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}