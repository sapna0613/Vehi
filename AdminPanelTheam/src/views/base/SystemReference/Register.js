import React, { useRef, useState } from 'react';
import {
  CCard, CCardBody,
  CCardHeader, CCol, CButton,
  CRow, CFormInput, CFormSelect,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  const navigate = useNavigate();
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Type, setType] = useState('');
  const [password, setpassword] = useState('');
  const [Status, setStatus] = useState('');
  const [joiningDate, setjoiningDate] = useState('');
   const profilePicRef = useRef(null);
  
  
 

  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('profilePic', profilePicRef.current.files[0]);
    formData.append('Name', Name);
    formData.append('Email', Email);
    formData.append('Phone', Phone);
    formData.append('Type', Type);
    formData.append('password', password);
    formData.append('Status', Status);
    formData.append('joiningDate', joiningDate);
    

    const res = await fetch('http://localhost:5000/Register', {
      method: 'POST',
      body: formData,
    });


    const data = await res.json();
   if (res.ok) {
    const { status, userId } = data;
    console.log('Status:', Status);
    console.log('User ID:', userId);
    toast.success(`User ID: ${userId}, Status: ${Status}`);
  


    setName('');
    setEmail('');
    setPhone('');
    setType('');
    setpassword('');
    setStatus('');
    setjoiningDate('');
  
    navigate('/base/SystermReference/Register');
     
    } else {
      console.log('Error:', data.message);
    }
  }

  return (
    <CRow>
       <CCardHeader>
              <strong>Register</strong>
            </CCardHeader>

     <form className="form-container" onSubmit={handleClick}>
        <CCol xs={12}>
          <CCard className="mb-12">
           
            <CCardBody className="mb-12" size="sm">
              <CRow>
              <CRow>
        <CFormInput
                  type="file"
                  size="lg"
                  id="profilePic"
                  name="profilePic"
                  label="Select Profile Pic"
                  placeholder="Select Profile Pic"
                  ref={profilePicRef}
                />
        </CRow>

        <div className="form-group">
    <label htmlFor="NameInput">Name</label>
    <input
      className="form-control"
      type="text"
      id="NameInput"
      placeholder="Name"
      value={Name}
      onChange={(e) => setName(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label htmlFor="EmailInput">Email</label>
    <input
      className="form-control"
      type="text"
      id="EmailInput"
      placeholder="Email"
      value={Email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label htmlFor="PhoneInput">Phone</label>
    <input
      className="form-control"
      type="text"
      id="PhoneInput"
      placeholder="Phone"
      value={Phone}
      onChange={(e) => setPhone(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label htmlFor="StatusInput">Status </label>
    <select
      className="form-control"
      id="StatusInput"
      value={Status}
      onChange={(e) => setStatus(e.target.value)}
    >
      <option value="">Status</option>
      <option value="Active">Active</option>
      <option value="Deactive">Deactive</option>
      <option value="Pending">Pending</option>
    </select>
  </div>


  <div className="form-group">
    <label htmlFor="StatusInput">Type </label>
    <select
      className="form-control"
      id="TypeInput"
      value={Type}
      onChange={(e) => setType(e.target.value)}
    >
      <option value="">Type</option>
      <option value="1">Partner</option>
      <option value="2">Manager</option>
    </select>
  </div>

  <div className="form-group">
    <label htmlFor="passwordInput">password</label>
    <input
      className="form-control"
      type="text"
      id="passwordInput"
      placeholder="password"
      value={password}
      onChange={(e) => setpassword(e.target.value)}
    />
  </div>     

  <div className="form-group">
    <label htmlFor="joiningDateInput">joiningDate</label>
    <input
      className="form-control"
      type="date"
      id="floatingJoiningDate"
      placeholder="joiningDate"
      value={joiningDate}
      onChange={(e) => setjoiningDate(e.target.value)}
    />
  </div> 
              

                <CCol xs={3}>
                  <CButton color="primary" className="me-md-2" size="lg" type="submit"> Submit </CButton>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </form>
      <ToastContainer position="bottom-right" />
    </CRow>
  )
}

export default Register;
