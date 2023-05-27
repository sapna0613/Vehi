import React, { useState, useEffect } from 'react';
import {
  CButton,CCard,
  CCardBody,CCardHeader,
  CCol,CRow,CTable,CTableRow,
  CTableHead,CTableHeaderCell,
  CTableBody,CTableDataCell,CImage
} from '@coreui/react';
import { DocsExample } from 'src/components';
import { Button } from '@coreui/coreui';
import { useNavigate } from 'react-router-dom';
import CatalogueCategory from './CatalogueCategory';


const ItemCatalogue=()=> {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/CatalogueCategory')
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
          `http://localhost:5000/CatalogueCategory/${id}`,
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
            <strong>Item Catalogue</strong>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">

            <CButton onClick={()=>navigate('/base/SystemReference/CatalogueCategory')} color="primary" className="me-md-2">
              Create Catalogue
            </CButton>
            
          </div>
          </CCardHeader>
          <CCardBody>
          <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">SR NO.</CTableHeaderCell>
              <CTableHeaderCell scope="col">profilePic</CTableHeaderCell>
              <CTableHeaderCell scope="col">Item Category</CTableHeaderCell>
              <CTableHeaderCell scope="col">DisputeReason</CTableHeaderCell>
              <CTableHeaderCell scope="col">Description</CTableHeaderCell>
              <CTableHeaderCell scope="col">Status(Switch)</CTableHeaderCell>
              {/* <CTableHeaderCell scope="col">Action(Edit/Delete)</CTableHeaderCell> */}
            </CTableRow>
          </CTableHead>
          <CTableBody>
    {data.map((item, index) => (
      <CTableRow key={index}>
        <CTableDataCell>{index + 1}</CTableDataCell>
        <CTableDataCell>
          <CImage rounded fluid src={item.profilePic} width={50} height={50} />
        </CTableDataCell>
        <CTableDataCell>{item.ItemCategory}</CTableDataCell>
        <CTableDataCell>{item.DisputeReason}</CTableDataCell>
        <CTableDataCell>{item.ItemDescription}</CTableDataCell>
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
                  navigate("/base/SystemReference/UpdateItemCatalogue/"+item._id)
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
      </CCol>
    </CRow>
  );
}

export default ItemCatalogue
