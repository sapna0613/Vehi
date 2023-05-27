import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";

function UpdateCustomers() {
  const navigate = useNavigate(); // Invoking useNavigate as a function
  const [data, setData] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    fetch(`http://localhost:5000/CreateCustomers/${id}`) 
      .then((result) => {
        result.json().then((resp) => {
          setData(resp);
        });
      });
   
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  
  function UpdateUser() {
    let item = {
        CustomerName: data.CustomerName,
        WalletBalance: data.WalletBalance,
        Country: data.Country,
     
      
    };
    fetch(`http://localhost:5000/CreateCustomers/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    });

    console.warn();
    navigate('/base/E-wallet-Managment/Customers');
  }
 

  return (
    <div>
              <form>
<div className="mb-3">
  <label htmlFor="CustomerName" className="form-label">
  CustomerName
  </label>
  <input
    type="text"
    className="form-control"
    id="CustomerName"
    name="CustomerName"
    value={data.CustomerName}
    onChange={handleInputChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="WalletBalance" className="form-label">
  WalletBalance
  </label>
  <input
    type="WalletBalance"
    className="form-control"
    id="WalletBalance"
    name="WalletBalance"
    value={data.WalletBalance}
    onChange={handleInputChange}
  />
</div>


<div className="mb-3">
  <label htmlFor="Country" className="form-label">
  Country
  </label>
  <input
    type="Country"
    className="form-control"
    id="Country"
    name="Country"
    value={data.Country}
    onChange={handleInputChange}
  />
</div>



<div className="d-grid gap-2">
  <button onClick={UpdateUser}>
    Update User
  </button>
</div>
</form>
    </div>
  );
}

export default UpdateCustomers;
