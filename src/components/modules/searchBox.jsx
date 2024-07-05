import React from 'react';
import { getMarketChartCoin } from '../../services/coinApi';

const SearchBox = ({datafilter,setShowModal,setDatahchart}) => {
    return (
        <div id='searchBox' className={`rounded-2xl p-2 ${!datafilter.length ?"hidden":"block"} w-full   absolute fixed overflow-auto border   `} style={{maxHeight:"420px",backgroundColor:"#111828",opacity:"90%"}}>
            {datafilter.map(item=><>
            <div className='flex gap-2 py-2 border-b border-t mb-1 rounded-t-2xl rounded-b-2xl items-center'>
               <img onClick={async() => {
                                        setShowModal(true)
                                        const dataCoin=await getMarketChartCoin(item.id);
                                       setDatahchart({data:dataCoin,coin:item});
                                      }} src={item.image}  className='w-9  rounded-full pl-2'  alt='ll' style={{cursor:"pointer"}}/>
               <h2>{item.symbol}</h2>
               <h2>{item.id}</h2>
            </div>
            </>)}
        </div>
    );
}

export default SearchBox;
