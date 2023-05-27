import React, { useState, useEffect } from 'react';
import {
  CButton,CCard,CCardBody,CCardHeader,
  CCol,CRow,CTable,CTableRow,
  CTableHead,CTableHeaderCell,
  CTableBody,CTableDataCell,CImage,
} from '@coreui/react';

import { useNavigate } from 'react-router-dom';
import CreateNotification from './CreateNotification';

const Notification=()=> {
    const navigate = useNavigate() ;
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/CreateNotification").then((result) => {
        result.json().then((resp) => {
          setData(resp);
        });
      });
    }, []);
  
    console.log(data);
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-12">
          <CCardHeader>
            <strong>Notification</strong>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">

            <CButton onClick={()=>navigate('/base/SystemReference/CreateNotification')} color="primary" className="me-md-2">
              Create Notifications
            </CButton>
            
          </div>
          </CCardHeader>
          <CCardBody>
          <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">SR NO.</CTableHeaderCell>
              <CTableHeaderCell scope="col">image</CTableHeaderCell>
              <CTableHeaderCell scope="col">Title</CTableHeaderCell>
              <CTableHeaderCell scope="col">Description</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
                {data.map((item, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>{index + 1}</CTableDataCell>
                    <CTableDataCell><CImage rounded fluid src={item.profilePic} width={50} height={50} /></CTableDataCell>
                    <CTableDataCell>{item.Title}</CTableDataCell>
                    <CTableDataCell>{item.Description}</CTableDataCell>
              
        

                  </CTableRow>
                ))}
               </CTableBody>
         
          <CTableBody>
            <CTableRow>
              
             
            
            </CTableRow>
           
          
          </CTableBody>
        </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default Notification
