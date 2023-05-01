import React,{ Fragment,useState} from "react";
import Cart from "./Component/Cart/Cart";
import Header from "./Component/Header/Header";

import MedicineList from "./Component/MedicineList";
import MedicineForm from "./Component/Medicineform";

function App(props) {
  const[cartIsVisible, setCartIsVisible]=useState(false);

  const showCartHandler=()=>{
    setCartIsVisible(true);
  }
  const hideCartHandler=()=>{
    setCartIsVisible(false);
  }
  return (
    <Fragment >
       {cartIsVisible && <Cart onHide={hideCartHandler}/>}
       <Header onShow={showCartHandler} />
    <MedicineForm/>
    </Fragment>
  );
}

export default App;
