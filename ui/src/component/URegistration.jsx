// import '../App.css';
// import React from 'react';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBRadio,
// } from 'mdb-react-ui-kit';

// function URegistration() {
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent default behavior
//     alert('Form submitted!'); // Add your logic here
//   };

//   return (
//     <MDBContainer fluid>
//       <MDBRow className="justify-content-center align-items-center m-5">
//         <MDBCard>
//           <MDBCardBody className="px-4">
//             <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
//             <form onSubmit={handleSubmit}>
//               <MDBRow>
//                 <MDBCol md="6">
//                   <MDBInput wrapperClass="mb-4" label="First Name" size="lg" id="form1" type="text" />
//                 </MDBCol>
//                 <MDBCol md="6">
//                   <MDBInput wrapperClass="mb-4" label="Last Name" size="lg" id="form2" type="text" />
//                 </MDBCol>
//               </MDBRow>

//               <MDBRow>
//                 <MDBCol md="6">
//                   <MDBInput wrapperClass="mb-4" label="Birthday" size="lg" id="form3" type="text" />
//                 </MDBCol>
//                 <MDBCol md="6" className="mb-4">
//                   <h6 className="fw-bold">Gender: </h6>
//                   <MDBRadio name="inlineRadio" id="inlineRadio1" value="option1" label="Female" inline />
//                   <MDBRadio name="inlineRadio" id="inlineRadio2" value="option2" label="Male" inline />
//                   <MDBRadio name="inlineRadio" id="inlineRadio3" value="option3" label="Other" inline />
//                 </MDBCol>
//               </MDBRow>

//               <MDBRow>
//                 <MDBCol md="6">
//                   <MDBInput wrapperClass="mb-4" label="Email" size="lg" id="form4" type="email" />
//                 </MDBCol>
//                 <MDBCol md="6">
//                   <MDBInput wrapperClass="mb-4" label="Phone Number" size="lg" id="form5" type="text" />
//                 </MDBCol>
//               </MDBRow>

//               <MDBBtn type="submit" className="btn-sm mb-1">
//                 Submit
//               </MDBBtn>
//             </form>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBRow>
//     </MDBContainer>
//   );
// }

// export default URegistration;
import React, { useState } from 'react';
// Import the CSS file
import '../App.css'; 

function URegistration() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match!');
      setSuccessMessage('');
    } else {
      setErrorMessage('');
      setSuccessMessage('Registration Successful!');
    }
  };

  return (
    <div className="form-container">
      <h2>User Registration</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
}

export default URegistration;