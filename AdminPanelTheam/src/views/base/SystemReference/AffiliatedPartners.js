import React, { useState, useEffect } from "react";
import { CButton, CImage, CCard, CCardBody, CCardHeader, CCol, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow, CFormSelect } from "@coreui/react";
import { useNavigate } from "react-router-dom";


const AffiliatedPartners = () => {
  const navigate = useNavigate();
 
  const [formData, setFormData] = useState({
    partnerName: '',
    email: '',
    mobileNumber: '',
    address: '',
    coverageState: '',
    commission: '',
    status: 'Active',
  });
  

  const [data, setData] = useState([]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (confirmDelete) {
      try {
        const response = await fetch(
          `http://localhost:5000/CreateAffiliatedPartners/${id}`,
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
 
  useEffect(() => {
    fetch('http://localhost:5000/CreateAffiliatedPartners')
      .then((result) => {
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
            <strong>Affiliated Partners</strong>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <CButton
                onClick={() =>
                  navigate("/base/SystemReference/CreateAffiliatedPartners")
                }
                color="primary"
                className="me-md-2"
              >
                Create Affiliated Partners
              </CButton>
            </div>
          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">SR NO.</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Partner Logo/Profile pic
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Partner Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Mobile Number</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Address</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Coverage State
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Commission</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status (Switch)</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Action (Edit, Delete)
                  </CTableHeaderCell>
                </CTableRow>
</CTableHead>
<CTableBody>

{data.map((item, index) => (
<CTableRow key={index}>
<CTableDataCell>{index + 1}</CTableDataCell>
<CTableDataCell>
<CImage
                     rounded
                     fluid
                     src={item.profilePic}
                     width={50}
                     height={50}
                   />
</CTableDataCell>
<CTableDataCell>{item.partnerName}</CTableDataCell>
<CTableDataCell>{item.email}</CTableDataCell>
<CTableDataCell>{item.mobileNumber}</CTableDataCell>
<CTableDataCell>{item.address}</CTableDataCell>
<CTableDataCell>{item.coverageState}</CTableDataCell>
<CTableDataCell>{item.commission}</CTableDataCell>

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
                  navigate("/base/SystemReference/Updatepartners/"+item._id)
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
};

export default AffiliatedPartners;
