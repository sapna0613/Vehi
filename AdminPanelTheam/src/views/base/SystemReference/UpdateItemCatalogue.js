import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";

function UpdateCustomer() {
  const navigate = useNavigate(); // Invoking useNavigate as a function
  const [data, setData] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    fetch(`http://localhost:5000/CatalogueCategory/${id}`) 
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
        profilePic: data.profilePic,
        ItemCategory: data.ItemCategory,
        DisputeReason: data.DisputeReason,
        ItemDescription: data.ItemDescription,
        Status: data.Status,
        
    
      
    };
    fetch(`http://localhost:5000/CatalogueCategory/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    });

    console.warn();
    navigate('/base/SystemReference/ItemCatalogue');
  }
 

  return (
    <div>
              <form>
<div className="mb-3">
  <label htmlFor="partnerName" className="form-label">
  profilePic
  </label>
  <input
    type="text"
    className="form-control"
    id="profilePic"
    name="profilePic"
    value={data.profilePic}
    onChange={handleInputChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="email" className="form-label">
  ItemCategory
  </label>
  <input
    type="ItemCategory"
    className="form-control"
    id="ItemCategory"
    name="ItemCategory"
    value={data.ItemCategory}
    onChange={handleInputChange}
  />
</div>


<div className="mb-3">
  <label htmlFor="email" className="form-label">
  ItemDescription
  </label>
  <input
    type="ItemDescription"
    className="form-control"
    id="ItemDescription"
    name="ItemDescription"
    value={data.ItemDescription}
    onChange={handleInputChange}
  />
</div>

<div className="mb-3">
  <label htmlFor="email" className="form-label">
  DisputeReason
  </label>
  <input
    type="ItemCategory"
    className="form-control"
    id="DisputeReason"
    name="DisputeReason"
    value={data.DisputeReason}
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
