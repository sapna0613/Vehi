import React, { useState, useEffect } from 'react';
import {
  CButton,
  CImage,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableRow,
  CTableHead,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell
} from '@coreui/react';
import { DocsExample } from 'src/components';
import { Button } from '@coreui/coreui';
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react';
import { useNavigate } from 'react-router-dom';
import CreateCustomer from './CreateCustomer';

const Customer = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('');

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (confirmDelete) {
      try {
        const response = await fetch(
          `http://localhost:5000/CreateCustomer/${id}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          setData((prevData) => prevData.filter((item) => item._id !== id));
        } else {
          console.log("Failed to delete item");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('Status', status);

    
  };
  useEffect(() => {
    fetch('http://localhost:5000/CreateCustomer')
      .then((result) => {
        result.json().then((resp) => {
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
            <strong>Customer</strong>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <CButton onClick={()=>navigate('../base/SystemReference/CreateCustomer')} color="primary" className="me-md-2">
                Create Customer
              </CButton>
            </div>
          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">S.NO</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Profile Picture</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Mobile Number</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status (Switch)</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {data.map((item, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>{index + 1}</CTableDataCell>
                    <CTableDataCell><CImage rounded fluid src={item.profilePic} width={50} height={50} /></CTableDataCell>
                    <CTableDataCell>{item.Name}</CTableDataCell>
                    <CTableDataCell>{item.MobileNumber}</CTableDataCell>
                    <CTableDataCell>{item.EmailId}</CTableDataCell>
                    <CTableDataCell>
  {item.status}
  <select
    className="form-control"
    value={item.status}
    onChange={(e) => {
      setData((prevData) => {
        const newData = [...prevData];
        newData.status = e.target.value;
        return newData;
      });
    }}
  >
    <option value="Active">Active</option>
    <option value="Inactive">Inactive</option>
  </select>
</CTableDataCell>
<CTableDataCell>
                  <CButton
                    onClick={() => handleDelete(item._id)}
                    color="danger"
                  >
                    Delete
                  </CButton>
                </CTableDataCell>
                <CTableDataCell>
          
          
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <CButton
                onClick={() =>
                  navigate("/base/SystemReference/UpdateCustomer/"+item._id)
                }
                color="primary"
                className="me-md-2"
              >
                Edit
              </CButton>
              
            </div>

                
                </CTableDataCell>

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

export default Customer
