import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";

function Updatepartners() {
  const navigate = useNavigate(); // Invoking useNavigate as a function
  const [data, setData] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    fetch(`http://localhost:5000/CreateMerchants/${id}`) 
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
        CompanyName: data.CompanyName,
        TradeName: data.TradeName,
        StoreAddress: data.StoreAddress,
        MerchantCategory: data.MerchantCategory,
        EmailId: data.EmailId,
        MobileNumber: data.MobileNumber,
        CoverageState: data.CoverageState,
        State: data.State,
        Country: data.Country,
        City: data.City,
        Commission: data.Commission,
        DeliveryOptions: data.DeliveryOptions,
        Status: data.Status,
        profilePic: data.profilePic
      
    };
    fetch(`http://localhost:5000/CreateMerchants/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    });

    console.warn();
    navigate('/base/SystemReference/Merchants');
  }
 

  return (
    <div>
              <form>
<div className="mb-3">
  <label htmlFor="partnerName" className="form-label">
  Company Name
  </label>
  <input
    type="text"
    className="form-control"
    id="CompanyName"
    name="CompanyName"
    value={data.CompanyName}
    onChange={handleInputChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="email" className="form-label">
  Trade Name
  </label>
  <input
    type="TradeName"
    className="form-control"
    id="TradeName"
    name="TradeName"
    value={data.TradeName}
    onChange={handleInputChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="mobileNumber" className="form-label">
  StoreAddress
  </label>
  <input
    type="text"
    className="form-control"
    id="StoreAddress"
    name="StoreAddress"
    value={data.StoreAddress}
    onChange={handleInputChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="address" className="form-label">
  MerchantCategory
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
  <label htmlFor="coverageState" className="form-label">
  EmailId
  </label>
  <input
    type="text"
    className="form-control"
    id="EmailId"
    name="EmailId"
    value={data.EmailId}
    onChange={handleInputChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="commission" className="form-label">
  Mobile Number
  </label>
  <input
    type="text"
    className="form-control"
    id="MobileNumber"
    name="MobileNumber"
    value={data.MobileNumber}
    onChange={handleInputChange}
  />
</div>

<div className="mb-3">
  <label htmlFor="commission" className="form-label">
  Coverage State
  </label>
  <input
    type="text"
    className="form-control"
    id="CoverageState"
    name="CoverageState"
    value={data.CoverageState}
    onChange={handleInputChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="commission" className="form-label">
  State
  </label>
  <input
    type="text"
    className="form-control"
    id="State"
    name="State"
    value={data.State}
    onChange={handleInputChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="commission" className="form-label">
  Country
  </label>
  <input
    type="text"
    className="form-control"
    id="Country"
    name="Country"
    value={data.Country}
    onChange={handleInputChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="commission" className="form-label">
  City
  </label>
  <input
    type="text"
    className="form-control"
    id="City"
    name="City"
    value={data.City}
    onChange={handleInputChange}
  />
</div>

<div className="mb-3">
  <label htmlFor="commission" className="form-label">
  Commission
  </label>
  <input
    type="text"
    className="form-control"
    id="Commission"
    name="Commission"
    value={data.Commission}
    onChange={handleInputChange}
  />
</div>

<div className="mb-3">
  <label htmlFor="commission" className="form-label">
  Delivery Options
  </label>
  <input
    type="text"
    className="form-control"
    id="DeliveryOptions"
    name="DeliveryOptions"
    value={data.DeliveryOptions}
    onChange={handleInputChange}
  />
</div>

<div className="mb-3">
  <label htmlFor="commission" className="form-label">
  City
  </label>
  <input
    type="text"
    className="form-control"
    id="City"
    name="City"
    value={data.City}
    onChange={handleInputChange}
  />
</div>


<div className="mb-3">
  <label htmlFor="commission" className="form-label">
  City
  </label>
  <input
    type="text"
    className="form-control"
    id="City"
    name="City"
    value={data.City}
    onChange={handleInputChange}
  />
</div>


<div className="mb-3">
  <label htmlFor="status" className="form-label">
    Status
  </label>
  <select
    className="form-control"
    id="status"
    name="status"
    value={data.status}
    onChange={handleInputChange}
  >
    <option value="Active">Active</option>
    <option value="Inactive">Inactive</option>
  </select>
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

export default Updatepartners;
