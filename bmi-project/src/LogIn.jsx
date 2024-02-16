import { useState } from 'react';
import Option from './Option';
import './App.css';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import { blue } from '@mui/material/colors';
import './Login.css';


export default function LogIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /*function login(e) {
    e.preventDefault();
    setIsLoggedIn(true);*/

    async function login(e) {
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
  

  return (
    <> 
      {!isLoggedIn && (
        <form onSubmit={login} className='F'><h2>
          <h2>LogIn</h2>
          {/* <label>Enter Name : </label> */}
          <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Enter Name' className='B' required/><br /><br />
          {/* <label>Enter Email : </label> */}
          <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' className='B' required/><br /><br />
          <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' className='B' required minLength={6} maxLength={8}/><br /><br />
          <button type="submit" style={{background:"red",color:"white"}}>Next</button></h2>
        </form>
     )}

      {isLoggedIn && <Option name={name} email={email} />}
      
     </>
  );
}


// import { useState } from 'react';
// import Option from './Option';
// import './App.css';

// export default function LogIn() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   async function handleLoginSubmit(event) {
//     event.preventDefault();

//     const userData = {
//       username: name,
//       email: email,
//       password: password
//     };

//     try {
//       const response = await fetch('http://localhost:3000/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(userData)
//       });

//       if (!response.ok) {
//         throw new Error('Failed to sign up');
//       }

//       setIsLoggedIn(true);
//     } catch (error) {
//       setError(error.message);
//     }
//   }

//   return (
//     <div>
//       {!isLoggedIn && (
//         <form onSubmit={handleLoginSubmit} className='login-form'>
//           <h2>Login</h2>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder='Enter Name'
//             required
//           /><br /><br />
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder='Enter Email'
//             required
//           /><br /><br />
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder='Enter Password'
//             required
//             minLength={6}
//             maxLength={8}
//           /><br /><br />
//           <button type="submit" style={{ background: "red", color: "white" }}>Next</button>
//           {error && <p className="error-message">{error}</p>}
//         </form>
//       )}

//       {isLoggedIn && <Option name={name} email={email} />}
//     </div>
//   );
// }
