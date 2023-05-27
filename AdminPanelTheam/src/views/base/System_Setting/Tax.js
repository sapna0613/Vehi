import React,{useState,useEffect} from 'react';
import {
  CButton,CCard,CCardBody,
  CCardHeader,CCol,CRow,
  CTable,CTableRow,CTableHead,
  CTableHeaderCell,CTableBody,CTableDataCell
} from '@coreui/react';
import { DocsExample } from 'src/components';
import { Button } from '@coreui/coreui';
import { useNavigate } from 'react-router-dom';


const Tax = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/AddCountryTax')
      .then((result) => {
        result.json().then((resp) => {
          // console.log("result",resp)
          setData(resp);
        });
      });
  }, []);

  console.log(data);

  const navigate = useNavigate();
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-12">
          <CCardHeader>
            <strong>Tax</strong>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">

            <CButton onClick={()=>navigate('/base/System_Setting/AddCountryTax')} color="primary" className="me-md-2">
              Add Country Tax
            </CButton>
            
          </div>
          </CCardHeader>
          <CCardBody>
          <CTable hover>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">SR NO.</CTableHeaderCell>
              <CTableHeaderCell scope="col">State</CTableHeaderCell>
              <CTableHeaderCell scope="col">Tax</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
         
                {data.map((item, index) => (
                  <CTableRow key={index + 1}>
                    <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                    <CTableHeaderCell>{item.Country}</CTableHeaderCell>
                    <CTableHeaderCell>{item.State}</CTableHeaderCell>
                    <CTableHeaderCell>{item.Tax}</CTableHeaderCell>
                    
                  </CTableRow>
                ))}
             
           
           
          </CTableBody>
        </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default Tax;