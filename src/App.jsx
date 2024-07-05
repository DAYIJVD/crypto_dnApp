import { useState } from "react";
import HomePage from "./components/template/homePage";
import Modal from "./components/template/modal";

function App() {
  const [dataChart,setDatachart]=useState([])
  const [showModal, setShowModal] =useState(false);
  return(
    <>
    <HomePage setShowModal={setShowModal} setDatahchart={setDatachart}/>;
    <Modal showModal={showModal} setShowModal={setShowModal} dataChart={dataChart}  setDatachart={setDatachart} />
    </>
  ) 
}

export default App;
