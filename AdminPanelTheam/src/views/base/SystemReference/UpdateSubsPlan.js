import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";

function Updatepartners() {
  const navigate = useNavigate(); // Invoking useNavigate as a function
  const [data, setData] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    fetch(`http://localhost:5000/CreateSubscriptionCategory/${id}`) 
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
        country: data.country,
        subscriptionPlan: data.subscriptionPlan,
        commission: data.commission,
      Status: data.Status,
     
      
    };
    fetch(`http://localhost:5000/CreateSubscriptionCategory/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    });

    console.warn();
    navigate('/base/SystemReference/Subscription_Plans');
  }
 

  return (
    <div>
              <form>
<div className="mb-3">
  <label htmlFor="partnerName" className="form-label">
  country
  </label>
  <input
    type="text"
    className="form-control"
    id="country"
    name="country"
    value={data.country}
    onChange={handleInputChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="email" className="form-label">
  subscription Plan
  </label>
  <input
    type="subscriptionPlan"
    className="form-control"
    id="subscriptionPlan"
    name="subscriptionPlan"
    value={data.subscriptionPlan}
    onChange={handleInputChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="mobileNumber" className="form-label">
  commission
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
