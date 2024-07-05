import { useEffect, useState } from "react";
import SearchBox from "../modules/searchBox";
import { getCoinsDataAll } from "../../services/coinApi";



const Header = ({setShowModal,setDatahchart}) => { 
    const [search,setSearch]=useState("");
    const [data,setdata]=useState([]);
    const [filterCoins,setfilterCoins]=useState([]);
    useEffect(()=>{
        const data=async()=>{
            const dtt=await getCoinsDataAll();
            setdata(dtt)
           } 
           data() 
    },[])
    const searchHandler=( (e)=>{
        const  value=e.target.value;
        setSearch(value);
    if(value){
        setfilterCoins(data.filter(i=>i.id.toLowerCase().includes(value)))
    
    }else{
        setfilterCoins([])
    }
    })
    return (<>
            <section id="header" className="w-full mt-3 rounded-md">
            <div id='bg' className="w-full rounded-xl   bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center ">
        
                <div>
                    <h1  className="text-white text-center xl:text-5xl bg-white bg-opacity-70 lg:text-4xl md:text-5xl sm:text-2xl xs:text-xl font-bold   p-2 "><span style={{color:"#f6dc32"}}>Crypto</span><span style={{color:"#0e275d"}}>DN</span></h1>
                </div>
                <div className="w-full mx-auto">
                    <form>
                        <div className="xl:w-1/2 lg:w-[60%] md:w-[70%] sm:w-[70%] xs:w-[90%] mx-auto flex flex-col relative gap-2 md:mt-6 xs:mt-4 mx-4">
                      
                        <input type="text" value={search} onChange={searchHandler} className="border-none text-gray-700 focus:outline-none w-full p-2 rounded-md text-sm "
                                    placeholder="search Crypto" />
                                    <SearchBox datafilter={filterCoins} setShowModal={setShowModal}setDatahchart={setDatahchart}/>
                            
                           {/* <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-55 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>usd</option>
  <option value=""></option>
  <option value=""></option>
</select> */}
                        </div>
                    </form>
                </div>
            </div>
        </section>
                </>
        )
   
    }

export default Header;
