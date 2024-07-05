import Coin from "./coin";

const Coins = ({data,setShowModal,setDatahchart}) => {
    return (
        
        <div className="flex my-4 text-center   flex-col">
      <div className=" pb-4">
          <div className="min-w-full inline-block ">
              <div className="   rounded-lg ">
                  <table className="table-auto min-w-full rounded-xl">
                      <thead >
                          <tr className="bg-black-50 ">
                              <th scope="col" className="p-5 text-center whitespace-nowrap text-sm leading-6 font-semibold  capitalize"> coin</th>
                              <th scope="col" className="p-5 text-center whitespace-nowrap text-sm leading-6 font-semibold  capitalize"> Name </th>
                              <th scope="col" className="p-3 text-center whitespace-nowrap text-sm leading-6  font-semibold  capitalize "> price </th>
                              <th scope="col" className="p-5t ext-center whitespace-nowrap text-sm leading-6 font-semibold  capitalize"> 24h </th>
                              <th scope="col" className="p-5 text-center whitespace-nowrap text-sm leading-6 font-semibold  capitalize"> Total Valume </th>
                              <th scope="col" className="p-5 text-center whitespace-nowrap text-sm leading-6 font-semibold capitalize"></th>

                          </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-300 ">
                       
                       {
                        
                        data.map(i=><Coin  key={i.id} coin={i} setDatahchart={setDatahchart} setShowModal={setShowModal}/>)
                       }
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
     </div>

    );
}

export default Coins;
