import React, { useRef, useState, useContext } from "react";
import Card from "./UI/Card";
import classes from "./MedicineForm.module.css";
import Button from "./Button.module.css";
import CartContext from "./store/Cart-Context";


export default function MedicineForm(props) {
  const CartCtx = useContext(CartContext);

  const nameInputRef = useRef();
  const priceInputRef = useRef();

  const [medicineName, setMedicineName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);

  const addToCartHandler = (item) => {
    const id = Math.random().toString(36).substr(2, 9);
      
    CartCtx.addItem({
      id: id,
      name: item.medicineName,
      price: item.price,
      amount: Number(item.amount),
    });
    console.log(item.medicineName);
    console.log(item.price);
    console.log(id);
    console.log(item.amount);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setList([
      ...list,
      { medicineName: medicineName, description: description, price: price, amount: amount },
    ]);

    // setMedicineName("");
    // setDescription("");
    // setPrice("");
    // setAmount("");
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="medicineName">Medicine Name</label>
          <input
            type="text"
            id="medicineName"
            ref={nameInputRef}
            value={medicineName}
            onChange={(event) => setMedicineName(event.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            ref={priceInputRef}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            min='1'
            max='5'
            
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
          
        </div>
        <button className={Button.button} type="submit">
          List Product
        </button>
      </form>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            Price : {item.medicineName}--- Description :{item.description}---
            Price :{item.price}-- Amount :{item.amount} {item.enteredAmount}
            <button onClick={() => addToCartHandler(item)}>ADD TO CART</button>
          </li>
        ))}
      </ul>
    </Card>
  );
}
