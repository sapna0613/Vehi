
import React, { useState, useEffect } from 'react';
import {
  CButton,CImage,CCard,
  CCardBody,CCardHeader,
  CCol,CRow,CTable,CTableRow,
  CTableHead,CTableHeaderCell,
  CTableBody,CTableDataCell,
} from '@coreui/react';
import { DocsExample } from 'src/components';
import { Button } from '@coreui/coreui';
import { useNavigate } from 'react-router-dom'




const MerchantCategory =()=> {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/CreateCategory')
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
          `http://localhost:5000/CreateCategory/${id}`,
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
      <CCol xs={12}>
        <CCard className="mb-12">
          <CCardHeader>
            <strong>Item Category</strong>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">

            <CButton onClick={()=>navigate('/base/SystemReference/CreateCategory')} color="primary" className="me-md-2">
            Create Category
            </CButton>
            
          </div>
          </CCardHeader>
          <CTable style={{ border: '1px solid #ccc', borderRadius: '5px' }}>
  <CTableHead style={{ backgroundColor: '#f5f5f5' }}>
    <CTableRow>
      <CTableHeaderCell scope="col">SR NO.</CTableHeaderCell>
      <CTableHeaderCell scope="col">profilePic</CTableHeaderCell>
      <CTableHeaderCell scope="col">CategoryName</CTableHeaderCell>
      <CTableHeaderCell scope="col">Status(switch)</CTableHeaderCell>
      <CTableHeaderCell scope="col">Action(Edit,Delete)</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    {data.map((item, index) => (
      <CTableRow key={index}>
        <CTableDataCell>{index + 1}</CTableDataCell>
        <CTableDataCell>
          <CImage rounded fluid src={item.profilePic} width={50} height={50} />
        </CTableDataCell>
        <CTableDataCell>{item.CategoryName}</CTableDataCell>
        
        <CTableDataCell>{item.Status}
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
                  </select></CTableDataCell>
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
                  navigate("/base/SystemReference/UpdateCreateCategory/"+item._id)
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

        </CCard>
      </CCol>
    </CRow>
  );
}

export default MerchantCategory;
