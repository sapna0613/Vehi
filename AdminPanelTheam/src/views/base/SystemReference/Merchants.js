import React, { useState, useEffect } from 'react';
import {
  CButton,CImage,CCard,
  CCardBody,CCardHeader,
  CCol,CRow,CTable,CTableRow,
  CTableHead,CTableHeaderCell,
  CTableBody,CTableDataCell
} from '@coreui/react';
import { DocsExample } from 'src/components';
import { Button } from '@coreui/coreui';
import { useNavigate } from 'react-router-dom'
import CreateMerchants from './CreateMerchants';



const Merchants = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/CreateMerchants')
      .then((result) => {
        result.json().then((resp) => {
          setData(resp);
        });
      });
  }, []);

  console.log(data);

  const navigate = useNavigate();


  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (confirmDelete) {
      try {
        const response = await fetch(
          `http://localhost:5000/CreateMerchants/${id}`,
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
  return (
    <CRow>
    <cc xs={12}>
      <CCard className="mb-12">
        <CCardHeader>
          <div className="d-flex justify-content-between align-items-center">
            <strong>Merchants</strong>
            <CButton onClick={() => navigate('/base/SystemReference/CreateMerchants')} color="primary">
              Create Merchants
            </CButton>
          </div>
        </CCardHeader>
        <CCardBody>
          <CTable responsive striped hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">SR NO.</CTableHeaderCell>
                <CTableHeaderCell scope="col">Profile Pic</CTableHeaderCell>
                <CTableHeaderCell scope="col">Company Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Trade Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Store Address</CTableHeaderCell>
                <CTableHeaderCell scope="col">Merchant Category</CTableHeaderCell>
                <CTableHeaderCell scope="col">Email Id</CTableHeaderCell>
                <CTableHeaderCell scope="col">Mobile Number</CTableHeaderCell>
                <CTableHeaderCell scope="col">Coverage State</CTableHeaderCell>
                <CTableHeaderCell scope="col">Country</CTableHeaderCell>
                <CTableHeaderCell scope="col">State</CTableHeaderCell>
                <CTableHeaderCell scope="col">City</CTableHeaderCell>
                <CTableHeaderCell scope="col">Commission</CTableHeaderCell>
                {/* <CTableHeaderCell scope="col">Brand Primary Color</CTableHeaderCell>
                <CTableHeaderCell scope="col">Brand Secondary Color</CTableHeaderCell> */}
                <CTableHeaderCell scope="col">Delivery Options</CTableHeaderCell>
                <CTableHeaderCell scope="col">Status</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {data.map((item, index) => (
                <CTableRow key={index}>
                  <CTableDataCell>{index + 1}</CTableDataCell>
                  <CTableDataCell>
                    <CImage rounded fluid src={item.profilePic} width={50} height={50} />
                  </CTableDataCell>
                  <CTableDataCell>{item.CompanyName}</CTableDataCell>
                  <CTableDataCell>{item.TradeName}</CTableDataCell>
                  <CTableDataCell>{item.StoreAddress}</CTableDataCell>
                  <CTableDataCell>{item.MerchantCategory}</CTableDataCell>
                  <CTableDataCell>{item.EmailId}</CTableDataCell>
                  <CTableDataCell>{item.MobileNumber}</CTableDataCell>
                  <CTableDataCell>{item.CoverageState}</CTableDataCell>
                  <CTableDataCell>{item.Country}</CTableDataCell>
                  <CTableDataCell>{item.State}</CTableDataCell>
                  <CTableDataCell>{item.City}</CTableDataCell>
                  <CTableDataCell>{item.Commission}</CTableDataCell>
                  <CTableDataCell>{item.DeliveryOptions}</CTableDataCell>
                 
<CTableDataCell>
                  {item.status}
                  <select
                    className="form-control"
                    value={item.status}
                    onChange={(e) => {
                      const updatedData = data.map((d) => {
                        if (d._id === item._id) {
                          return { ...d, status: e.target.value };
                        }
                        return d;
                      });
                      setData(updatedData);
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
                  navigate("/base/SystemReference/UpdateMerchants/"+item._id)
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
          </CTable>
        </CCardBody>
   </CCard>
 </cc>
      
    </CRow>
  );
}

export default Merchants
