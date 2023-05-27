import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";

function UpdateCustomer() {
  const navigate = useNavigate(); // Invoking useNavigate as a function
  const [data, setData] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    fetch(`http://localhost:5000/CreateItemCategory/${id}`) 
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
        MerchantCategory: data.MerchantCategory,
        ItemCategoryName: data.ItemCategoryName,
        Status: data.Status,
        
    
      
    };
    fetch(`http://localhost:5000/CreateItemCategory/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    });

    console.warn();
    navigate('/base/SystemReference/ItemCategory');
  }
 

  return (
    <div>
              <form>
<div className="mb-3">
  <label htmlFor="partnerName" className="form-label">
  Merchant Category
  </label>
  <input
    type="text"
    className="form-control"
    id="MerchantCategory"
    name="MerchantCategory"
    value={data.MerchantCategory}
    onChange={handleInputChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="email" className="form-label">
  ItemCategoryName
  </label>
  <input
    type="ItemCategoryName"
    className="form-control"
    id="ItemCategoryName"
    name="ItemCategoryName"
    value={data.ItemCategoryName}
    onChange={handleInputChange}
  />
</div>

<div className="mb-3">
  <label htmlFor="profilePic" className="form-label">
  Status
  </label>
  <input
    type="text"
    className="form-control"
    id="Status"
    name="Status"
    value={data.Status}
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

export default UpdateCustomer;
