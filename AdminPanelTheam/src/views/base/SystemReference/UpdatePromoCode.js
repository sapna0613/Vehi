import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";

function Updatepartners() {
  const navigate = useNavigate(); // Invoking useNavigate as a function
  const [data, setData] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    fetch(`http://localhost:5000/CreatePromoCode/${id}`) 
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
        State: data.State,
        City: data.City,
        PromoCode: data.PromoCode,
        PromoDescription: data.PromoDescription,
        Percentage: data.Percentage,
        MaxAmount: data.MaxAmount,
        ExpirationDate: data.ExpirationDate,
        profilePic: data.profilePic
      
    };
    fetch(`http://localhost:5000/CreatePromoCode/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    });

    console.warn();
    navigate('/base/SystemReference/PromoCodes');
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
  State
  </label>
  <input
    type="State"
    className="form-control"
    id="State"
    name="State"
    value={data.State}
    onChange={handleInputChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="mobileNumber" className="form-label">
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
  <label htmlFor="mobileNumber" className="form-label">
  Promo Code 
  </label>
  <input
    type="PromoCode"
    className="form-control"
    id="PromoCode"
    name="PromoCode"
    value={data.PromoCode}
    onChange={handleInputChange}
  />
</div>

<div className="mb-3">
  <label htmlFor="mobileNumber" className="form-label">
  Promo Description
  </label>
  <input
    type="text"
    className="form-control"
    id="PromoDescription"
    name="PromoDescription"
    value={data.PromoDescription}
    onChange={handleInputChange}
  />
</div>


<div className="mb-3">
  <label htmlFor="mobileNumber" className="form-label">
  Percentage
  </label>
  <input
    type="text"
    className="form-control"
    id="Percentage"
    name="Percentage"
    value={data.Percentage}
    onChange={handleInputChange}
  />
</div>


<div className="mb-3">
  <label htmlFor="mobileNumber" className="form-label">
  Max Amount
  </label>
  <input
    type="text"
    className="form-control"
    id="MaxAmount"
    name="MaxAmount"
    value={data.MaxAmount}
    onChange={handleInputChange}
  />
</div>


<div className="mb-3">
  <label htmlFor="mobileNumber" className="form-label">
  ExpirationDate
  </label>
  <input
    type="text"
    className="form-control"
    id="ExpirationDate"
    name="ExpirationDate"
    value={data.ExpirationDate}
    onChange={handleInputChange}
  />
</div>


<div className="mb-3">
  <label htmlFor="status" className="form-label">
  profilePic
  </label>
  <select
    className="form-control"
    id="profilePic"
    name="profilePic"
    value={data.profilePic}
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
