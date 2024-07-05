import  { useEffect, useState } from 'react';
import HelloPage from './helloPage';
import Header from './header';
import { getCoinsData } from '../../services/coinApi';
import Loading from './loading';
import Coins from '../modules/coins'
import Modal from './modal';
import { Paginate } from './paginate';
const HomePage = ({setShowModal,setDatahchart}) => {
    const [slideonTop,setSlide]= useState(0);
    const [loading,setLoading]= useState(true);
    const [coins,setCoins]=useState([]);
    const [active, setActive] = useState(1);
   
    useEffect(()=>{
        if (slideonTop) {
        setLoading(true)
            const data=async()=>{
                const dtt=await getCoinsData(active);
                setCoins(dtt)
               } 
               data()  
               setTimeout(()=>{
              setLoading(false)
               },1000)
        }
       
       
    },[slideonTop]);
    useEffect(()=>{
        setLoading(true)
        const data=async()=>{
            const dtt=await getCoinsData(active);
            setCoins(dtt)
           } 
           data()  
           setTimeout(()=>{
          setLoading(false)
           },1000)
    },[active])
    return (
        <div id={slideonTop==0?'':'slideOutUp'}>
            <HelloPage slideonTop={slideonTop} setSlide={setSlide} />
           {!!slideonTop&&<>
           <Header data={coins} setShowModal={setShowModal}setDatahchart={setDatahchart}/>  
           {loading?<Loading/>:<>
           <Coins data={coins} setShowModal={setShowModal} setDatahchart={setDatahchart}/>
           <Paginate active={active} setActive={setActive}/>
           </>}   
                  
           </>
           } 
              
        </div>
    );
}

export default HomePage;
