// IncomingRequests.js

import React, { useState, useEffect } from 'react';
import { filterData } from '../data';
// import { db } from '../utils/firebase'; 
// import { onValue, ref } from 'firebase/database';
import './IncomingRequest.css';

const IncomingRequests = () => {
  // const [patients, setPatients] = useState([]);

  // useEffect(() => {
  //   const fetchData = () => {
  //     const dataRef = ref(db, 'patients'); 
  //     onValue(dataRef, (snapshot) => {
  //       if (snapshot.exists()) {
  //         const data = snapshot.val();
  //         const patientData = Object.keys(data).map((key) => ({
  //           id: key,
  //           ...data[key],
  //         }));
  //         setPatients(patientData);
  //       } else {
  //         setPatients([]); 
  //       }
  //     });
  //   };
  //   fetchData();
  // }, []);


  return (
    <div className="incoming-requests-container">
      <h2 className="incoming-requests-title">Incoming Requests</h2>
      <div className="patient-details">
        {filterData.map((patient) => (
          <div key={patient.id}>
            <p><strong>Name:</strong> {patient.name}</p>
            <p><strong>Age:</strong> {patient.age}</p>
            <p><strong>Gender:</strong> {patient.gender}</p>
            <p><strong>Blood Group:</strong> {patient.bloodgroup}</p>
            <p><strong>Location:</strong> {patient.location}</p>
            {/* Render other patient details here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncomingRequests;
