import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";

function UpdateCustomer() {
  const navigate = useNavigate(); // Invoking useNavigate as a function
  const [data, setData] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    fetch(`http://localhost:5000/CreateCustomer/${id}`) 
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
        Name: data.Name,
        EmailId: data.EmailId,
        MobileNumber: data.MobileNumber,
        profilePic: data.profilePic,
    
      
    };
    fetch(`http://localhost:5000/CreateCustomer/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    });

    console.warn();
    navigate('/base/SystemReference/Customer');
  }
 

  return (
    <div>
              <form>
<div className="mb-3">
  <label htmlFor="partnerName" className="form-label">
  Name
  </label>
  <input
    type="text"
    className="form-control"
    id="Name"
    name="Name"
    value={data.Name}
    onChange={handleInputChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="email" className="form-label">
  EmailId
  </label>
  <input
    type="EmailId"
    className="form-control"
    id="email"
    name="EmailId"
    value={data.EmailId}
    onChange={handleInputChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="MobileNumber" className="form-label">
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
  <label htmlFor="profilePic" className="form-label">
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
