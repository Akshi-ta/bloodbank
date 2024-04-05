// IncomingRequests.js

import React, { useState, useEffect } from 'react';
import './IncomingRequest.css';
import axios from 'axios';

const IncomingRequests = () => {
  const [filterData, setFilterdata]  = useState([]);

  async function fetchIncomingRequest()
  {
    const url = "http://localhost:2004/product/fetchIncomingRequest";
    const email =  localStorage.getItem("email");
    const obj = {"email":email};
    const servermesg = await axios.post(url , obj);
    if(servermesg.data.status === true)
    {
      alert(JSON.stringify(servermesg));
      setFilterdata(servermesg.data.res)
    }
    else{
      alert("error");
    }
  }
 
  useEffect(()=>{
    fetchIncomingRequest();
  },[])

  return (
    <div className="incoming-requests-container mt-25">
      <h2 className="incoming-requests-title">Incoming Requests</h2>
      <div className="patient-details">
        {filterData.map((patient) => (
          <div key={patient.id}>
            <p><strong>Name:</strong> {patient.pName}</p>
            <p><strong>Email:</strong> {patient.pEmail}</p>
            <p><strong>Age:</strong> {patient.pAge}</p>
            <p><strong>Gender:</strong> {patient.pGender}</p>
            <p><strong>Blood Group:</strong> {patient.bloodGroup}</p>
            <p><strong>Address:</strong> {patient.pAddress}</p>
            <p><strong>Phone Number:</strong> {patient.pPhone}</p>
            {/* Render other patient details here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncomingRequests;
