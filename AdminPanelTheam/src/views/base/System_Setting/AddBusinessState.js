import React, { useRef, useState } from 'react';
import {
  CCard, CCardBody,
  CCardHeader, CCol, CButton,
  CRow, CFormInput, CFormSelect,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'

const AddBusinessState = () => {
  const navigate = useNavigate() ;
// const history = useHistory() 
  const inputRef = useRef(null);
  const [dropdown, setDropDown] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault();

    const value = inputRef.current.value;
    const country = e.target.elements.country.value;
    const state = e.target.elements.state.value;
    const Status = e.target.elements.Status.value;

    const dropdown = {
      BusinessState: value,
      Country: country,
      State: state,
      Status: Status
    }

    const res = await fetch('http://localhost:5000/AddBusinessState', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dropdown),
    });

    const data = await res.json();

    if (res.ok) {
     
      setDropDown(data);
      
       navigate('/base/System_Setting/BusinessState')
      // do something else with the response data
    } else {
      console.log('Error:', data.message);
    }
  }
 

  return (
    <CRow>
      <form onSubmit={handleClick}>
        <CCol xs={12}>
          <CCard className="mb-12" >
            <CCardHeader>
              <strong>Add Country Tax</strong>
            </CCardHeader>
            <CCardBody className="mb-12" size="sm">
              <CRow>
                <CCol xs={3}>
                  <CFormInput className="mb-3" size="lg" ref={inputRef} type="text" id="floatingInput" name="businessState" floatingLabel="Business State" placeholder="Business State" />
                </CCol>

                <CCol xs={3} md>
                  <CFormSelect size='lg' name="country" aria-label="Works with selects">
                    <option>Select Country</option>
                    <option value="USA">USA</option>
                    <option value="Philippine">Philippine</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                  </CFormSelect>
                </CCol>

                <CCol xs={3} md>
                  <CFormSelect size='lg' name="state" aria-label="Works with selects">
                    <option>Select State</option>
                    <option value="Manila">Manila</option>
                    <option value="Torento">Torento</option>
                    <option value="WashintonDC">WashintonDC</option>
                    <option value="Colmobo">Colmobo</option>
                  </CFormSelect>
                </CCol>

                <CCol xs={3} md>
                  <CFormSelect size='lg' name="Status" aria-label="Large select example">
                    <option>Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </CFormSelect>
                </CCol>

                <CCol xs={3}>
                  <CButton color="primary" className="me-md-2" size="lg" type="submit"> Submit </CButton>
                </CCol>

                
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </form>
    </CRow>
  )
}

export default AddBusinessState;
