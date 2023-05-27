import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";

function Updatepartners() {
  const navigate = useNavigate(); // Invoking useNavigate as a function
  const [data, setData] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    fetch(`http://localhost:5000/CreateAffiliatedPartners/${id}`) 
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
      partnerName: data.partnerName,
      email: data.email,
      mobileNumber: data.mobileNumber,
      address: data.address,
      commission: data.commission,
      coverageState: data.coverageState
      
    };
    fetch(`http://localhost:5000/CreateAffiliatedPartners/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    });

    console.warn();
    navigate('/base/SystemReference/AffiliatedPartners');
  }
 

  return (
    <div>
              <form>
<div className="mb-3">
  <label htmlFor="partnerName" className="form-label">
    Partner Name
  </label>
  <input
    type="text"
    className="form-control"
    id="partnerName"
    name="partnerName"
    value={data.partnerName}
    onChange={handleInputChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="email" className="form-label">
    Email
  </label>
  <input
    type="email"
    className="form-control"
    id="email"
    name="email"
    value={data.email}
    onChange={handleInputChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="mobileNumber" className="form-label">
    Mobile Number
  </label>
  <input
    type="text"
    className="form-control"
    id="mobileNumber"
    name="mobileNumber"
    value={data.mobileNumber}
    onChange={handleInputChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="address" className="form-label">
    Address
  </label>
  <input
    type="text"
    className="form-control"
    id="address"
    name="address"
    value={data.address}
    onChange={handleInputChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="coverageState" className="form-label">
    Coverage State
  </label>
  <input
    type="text"
    className="form-control"
    id="coverageState"
    name="coverageState"
    value={data.coverageState}
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
    id="commission"
    name="commission"
    value={data.commission}
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
