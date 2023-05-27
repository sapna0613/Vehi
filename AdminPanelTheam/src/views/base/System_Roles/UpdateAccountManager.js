import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";

function UpdateAccountManager() {
  const navigate = useNavigate(); // Invoking useNavigate as a function
  const [data, setData] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    fetch(`http://localhost:5000/CreateAccountManager/${id}`) 
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
      Email: data.Email,
      Phone: data.Phone,
      Status:data.Status
     
      
    };
    fetch(`http://localhost:5000/CreateAccountManager/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    });

    console.warn();
    navigate('/base/System_Roles/AccountManager');
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
  <label htmlFor="Email" className="form-label">
  Email
  </label>
  <input
    type="Email"
    className="form-control"
    id="Email"
    name="Email"
    value={data.Roles}
    onChange={handleInputChange}
  />
</div>

<div className="mb-3">
  <label htmlFor="Email" className="form-label">
  Phone
  </label>
  <input
    type="Phone"
    className="form-control"
    id="Phone"
    name="Phone"
    value={data.Phone}
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

export default UpdateAccountManager;
