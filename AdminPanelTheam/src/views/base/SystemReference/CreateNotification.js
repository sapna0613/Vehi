import React, { useRef, useState } from 'react';
import {
  CCardHeader,
  CCol,
  CRow,
  CFormInput,
  CFormSelect,
  CButton
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';
const CreateNotification = () => {
  const navigate = useNavigate();
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');

  
 
  const profilePicRef = useRef(null);

  const handleClick = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('profilePic', profilePicRef.current.files[0]);
    formData.append('Title', Title);
    formData.append('Description', Description);
    

    const res = await fetch('http://localhost:5000/CreateNotification', {
      method: 'POST',
      body: formData,
    });
    
    const data = await res.json();
    if (res.ok) {
      setTitle('');
      setDescription('');
     
      
     navigate(' ./base/SystemReference/CreateNotification')

     
    } else {
      console.log('Error:', data.message);
    }
  };

  return (
    <CRow>
      <CCardHeader>
        <strong>Notification</strong>
      </CCardHeader>
      <form onSubmit={handleClick}>
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
        <CRow>
          <CCol xs={3}>
            <CFormInput
              className="mb-1"
              size="lg"
              type="text"
              id="TitleInput"
              placeholder="Title"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol xs={3}>
            <CFormInput
              className="mb-1"
              size="lg"
              type="text"
              id="Description"
              placeholder="Description"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </CCol>
        </CRow>
       
        
      
        <CRow>
          <CCol xs={3}>
           
          </CCol>
          <CCol xs={3}>
                  <CButton color="primary" className="me-md-2" size="lg" type="submit"> Submit </CButton>
                </CCol>
        </CRow>
    </form>
        </CRow>

  )}
  export default CreateNotification