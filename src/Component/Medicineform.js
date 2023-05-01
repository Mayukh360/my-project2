import React, { useRef, useState } from 'react';

export default function MedicineForm() {
  const medicineNameRef = useRef();
  const [medicineName, setMedicineName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState({});
  const [list, setList] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();
    const errors = {};

    if (!medicineName.trim()) {
      errors.medicineName = 'Medicine Name is required';
    }

    if (!description.trim()) {
      errors.description = 'Description is required';
    }

    if (!price.trim() || isNaN(price)) {
      errors.price = 'Price is required and must be a number';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    setList([...list, { medicineName, description, price }]);
    setMedicineName('');
    setDescription('');
    setPrice('');
    setErrors({});
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="medicineName">Medicine Name</label>
          <input
            type="text"
            id="medicineName"
            ref={medicineNameRef}
            value={medicineName}
            onChange={(event) => setMedicineName(event.target.value)}
          />
          {errors.medicineName && <span>{errors.medicineName}</span>}
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          {errors.description && <span>{errors.description}</span>}
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          {errors.price && <span>{errors.price}</span>}
        </div>
        <button type="submit">List Product</button>
      </form>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.medicineName}---{item.description}---{item.price}<button>Add to Cart</button>
          </li>
        ))}
      </ul>
    </>
  );
}
