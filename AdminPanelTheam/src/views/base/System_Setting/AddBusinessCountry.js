import React, { useRef, useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CButton,
  CRow,
  CFormInput,
  CFormSelect,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom'

const AddBusinessCountry = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [dropdown, setDropDown] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault();

    const value = inputRef.current.value;
    const Currency = e.target.elements.Currency.value;
    const CurrencySymbol = e.target.elements.CurrencySymbol.options[e.target.elements.CurrencySymbol.selectedIndex].value;
    // const Status = e.target.elements.Status.value;

    const dropdown = {
      CountryName: value,
      Currency: Currency,
      CurrencySymbol: CurrencySymbol,
      // Status: Status,
    };

    const res = await fetch('http://localhost:5000/AddBusinessCountry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dropdown),
    });

    const data = await res.json();

    if (res.ok) {
      setDropDown(data);
      navigate('/base/System_Setting/BusinessCoun');
    } else {
      console.log('Error:', data.message);
    }
  };

  return (
    <CRow>
      <form onSubmit={handleClick}>
        <CCol xs={12}>
          <CCard className="mb-12">
            <CCardHeader>
              <strong>Add Country Tax</strong>
            </CCardHeader>
            <CCardBody className="mb-12" size="sm">
              <CRow>
              <CCol xs={3}>
                  <CFormInput className="mb-3" size="lg" ref={inputRef} type="text" id="floatingInput" name="CountryName" floatingLabel="Business Country" placeholder="Business Country" />
                </CCol>

                <CCol xs={3} md>
                  <CFormSelect size="lg" name="Currency" aria-label="Works with selects">
                    <option>Select Currency</option>
                    <option value="USA">USA</option>
                    <option value="Philippine">Philippine</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                  </CFormSelect>
                </CCol>

                <CCol xs={3} md>
                <CFormSelect size="lg" name="CurrencySymbol" aria-label="Works with selects">
                    <option>Select CurrencySymbol</option>
                    <option value="$">$</option>
                    <option value="Rs">Rs</option>
                    <option value="WashintonDC">WashintonDC</option>
                    <option value="Colmobo">Colmobo</option>
                  </CFormSelect>
                </CCol>



                {/* <CCol xs={3} md>
                  <CFormSelect size='lg' name="Status" aria-label="Large select example">
                    <option>Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </CFormSelect>
                </CCol> */}

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

export default AddBusinessCountry;
