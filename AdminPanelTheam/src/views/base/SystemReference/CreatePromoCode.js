import React, { useRef, useState } from 'react'
import {
  CCard,CCardBody,
  CCardHeader,CCol,CButton,
  CRow,CFormInput,CFormSelect,
} from '@coreui/react';
import { DocsExample } from 'src/components';
import { Button } from '@coreui/coreui'
import {useNavigate} from 'react-router-dom'


const CreatePromoCode=()=>{

  const navigate = useNavigate();
  const [Country,SetCountry ] = useState('');
  const [State,SetState ] = useState('');
  const [City,SetCity ] = useState('');
  const [PromoCode, SetPromoCode] = useState('');
  const [PromoDescription,SetPromoDescription ] = useState('');
  const [Percentage,SetPercentage ] = useState('');
  const [MaxAmount,SetMaxAmount ] = useState('');
  const [ExpirationDate,SetExpirationDate ] = useState('');
   
   
  const profilePicRef = useRef(null);

  

    const handleClick =async(e)=>{
       e.preventDefault

        
    const formData = new FormData();
    formData.append('profilePic', profilePicRef.current.files[0]);
    formData.append('Country', Country);
    formData.append('State', State);
    formData.append('City', City);
    formData.append('PromoCode', PromoCode);
    formData.append('PromoDescription', PromoDescription);
    formData.append('Percentage', Percentage);
    formData.append('MaxAmount', MaxAmount);
    formData.append('ExpirationDate', ExpirationDate);


    const res = await fetch('http://localhost:5000/CreatePromoCode', {
      method: 'POST',
      body: formData,
    });
    
    const data = await res.json();
    if (res.ok) {
      SetCountry('');
      SetState('');
      SetCity('');
      SetPromoCode('');
      SetPromoDescription('');
      SetPercentage('');
      SetMaxAmount('');
      SetExpirationDate('')
      navigate('/base/SystemReference/PromoCodes');

     
    } else {
      console.log('Error:', data.message);
    }
  };

    
     
    return (  
      <div>
      <CRow>

      <strong>Create Tickets</strong>
           
        <form onSubmit={handleClick}>
       
        <CCol xs={12}>
          <CCard className="mb-12" >
            
          

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
    <select
      className="form-control"
      id="Country"
      value={Country}
      onChange={(e) => SetCountry(e.target.value)}
    >
      <option value="">Country </option>
      <option value="A">A</option>
      <option value="P">P</option>
    </select>
    </CRow>
          
          <CRow>
           <select
      className="form-control"
      id="State"
      value={State}
      onChange={(e) => SetState(e.target.value)}
    >
      <option value="">State </option>
      <option value="A">A</option>
      <option value="P">P</option>
    </select>
    </CRow>

      <CRow>
       <select
      className="form-control"
      id="City"
      value={City}
      onChange={(e) => SetCity(e.target.value)}
    >
      <option value="">City </option>
      <option value="A">A</option>
      <option value="P">P</option>
    </select>
    </CRow> 
            
<CRow>
         
            <CFormInput
              className="mb-1"
              size="lg"
              type="text"
              id="PromoCode"
              placeholder=" PromoCode"
              value={PromoCode}
              onChange={(e) => SetPromoCode(e.target.value)}
            />
          </CRow>
        


     
          <CRow>
            <CFormInput
              className="mb-1"
              size="lg"
              type="text"
              id="PromoDescription"
              placeholder=" PromoDescription"
              value={PromoDescription}
              onChange={(e) => SetPromoDescription(e.target.value)}
            />
          </CRow>
     
            

            
  
      <CRow>
            <CFormInput
              className="mb-1"
              size="lg"
              type="text"
              id="Percentage"
              placeholder=" Percentage "
              value={Percentage}
              onChange={(e) => SetPercentage(e.target.value)}
            />
          <CRow>


         

        <CRow>
            <CFormInput
              className="mb-1"
              size="lg"
              type="text"
              id="MaxAmount"
              placeholder=" MaxAmount "
              value={MaxAmount}
              onChange={(e) => SetMaxAmount(e.target.value)}
            />
            </CRow>
         
   
         
        
  
          </CRow>
            <CFormInput
              className="mb-1"
              size="lg"
              type="text"
              id="ExpirationDate"
              placeholder=" ExpirationDate "
              value={ExpirationDate}
              onChange={(e) => SetExpirationDate(e.target.value)}
            />
         </CRow>
       
            
         
       
         <CCol xs={3}>
                  <CButton color="primary" className="me-md-2" size="lg" type="submit"> Submit </CButton>
                </CCol>
          
            </CCard>
            </CCol>
            </form>
            </CRow>
            </div>
    );
  }
  
export default CreatePromoCode