// import { useState } from 'react';
// import Option from './Option';
// import './App.css';
// // import Card from '@mui/material/Card';
// // import CardContent from '@mui/material/CardContent';
// // import CardMedia from '@mui/material/CardMedia';
// // import Typography from '@mui/material/Typography';
// // import { CardActionArea } from '@mui/material';
// // import { blue } from '@mui/material/colors';
// import './Login.css';


// export default function LogIn() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   /*function login(e) {
//     e.preventDefault();
//     setIsLoggedIn(true);*/

//     async function login(e) {
//       e.preventDefault();
  
//       // Create a data object with the user input
//       const data = {
//         username: name,
//         email: email,
//         password: password
//       };
  
      
//       try {
//         // Make a POST request to the signup endpoint
//         const response = await fetch('http://localhost:3000/auth/signup', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(data)
//         });
  
//         if (response.ok) {
//           // If the request is successful, set the state to indicate that the user is logged in
//           setIsLoggedIn(true);
//         } else {
//           // If there's an error with the request, throw an error or handle it accordingly
//           throw new Error('Failed to sign up');
//         }
//       } catch (error) {
//         console.error('Error signing up:', error);
//         // Handle the error, e.g., show an error message to the user
//       }
//     }
  

//   return (
//     <> 
//       {!isLoggedIn && (
//         <form onSubmit={login} className='F'><h2>
//           <h2>Register </h2>
//           {/* <label>Enter Name : </label> */}
//           <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Enter Name' className='B' required/><br /><br />
//           {/* <label>Enter Email : </label> */}
//           <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' className='B' required/><br /><br />
//           <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' className='B' required minLength={6} maxLength={8}/><br /><br />
//           <button type="submit" style={{background:"GREEN",color:"white"}}>Next</button></h2>
//         </form>
//      )}

//       {isLoggedIn && <Option name={name} email={email} />}
      
//      </>
//   );
// }



import React, { useState } from 'react';
import Option from './Option';
import './Login.css';

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function signup(e) {
    e.preventDefault();

    // Create a data object with the user input
    const data = {
      username: name,
      email: email,
      password: password
    };

    try {
      // Make a POST request to the signup endpoint
      const response = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        // If the request is successful, set the state to indicate that the user is logged in
        setIsLoggedIn(true);
      } else {
        // If there's an error with the request, throw an error or handle it accordingly
        throw new Error('Failed to sign up');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle the error, e.g., show an error message to the user
    }
  }

  async function login(e) {
    e.preventDefault();

    // Create a data object with the user input
    const data = {
      username: name,
      password: password
    };

    try {
      // Make a POST request to the login endpoint
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        // If the request is successful, set the state to indicate that the user is logged in
        setIsLoggedIn(true);
      } else {
        // If there's an error with the request, throw an error or handle it accordingly
        throw new Error('Failed to login');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle the error, e.g., show an error message to the user
    }
  }

  return (
    <div className="login-container">
      {!isLoggedIn && !isRegistering && (
        <form onSubmit={login} className='form'>
          <h2>Login </h2>
          <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Username' className='input' required/><br /><br />
          <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' className='input' required minLength={6} maxLength={8}/><br /><br />
          <button type="submit" className='button'>Login</button>
          <p>Don't have an account? <span onClick={() => setIsRegistering(true)}>Sign Up</span></p>
        </form>
      )}

      {!isLoggedIn && isRegistering && (
        <form onSubmit={signup} className='form'>
          <h2>Register </h2>
          <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Username' className='input' required/><br /><br />
          <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' className='input' required/><br /><br />
          <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' className='input' required minLength={6} maxLength={8}/><br /><br />
          <button type="submit" className='button'>Sign Up</button>
          <p>Already have an account? <span onClick={() => setIsRegistering(false)}>Login</span></p>
        </form>
      )}

      {isLoggedIn && <Option name={name} email={email} />}
    </div>
  );
}

