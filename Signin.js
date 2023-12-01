import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'
import {useState} from 'react'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
 
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
  
    const [errors, setErrors] = useState({});
    const [dis,setdis]=useState(false)
    
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    event.preventDefault();

    //Validate form fields
     const validationErrors = validateForm(formData);
     setErrors(validationErrors);

     //If there are no errors, submit the form
     if(Object.keys(validationErrors).length === 0) {
         //Perform form submission logic here
         setdis(!dis)
         console.log('Form-submitted successfully!');
     }
  };
 
 



  

  const handleChange = (e) => {
      const { name, value } = e.target;

      //Update the form data state
      setFormData({
          ...formData,
          [name]: value,
      });

      //Clear the error for the current field
      setErrors({
          ...errors,
      })
  }


  const validateForm = (data) => {
      let errors = {};

      const regex =  /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

      //Validate email
  if(!data.email.trim()) {
      errors.email = 'Email is required';
  }

  if(!regex.test(data.email)){
      errors.email = "This is not a valid email format!";

    }

  //Validate password
  if(!data.password.trim()) {
      errors.password = 'Password is required';
  }
  if((data.password).length<4 && (data.password).length>0){
    errors.password = "Password must be more than 4 characters";
}
  if((data.password).length>16){
        errors.password = "Password cannot be more than 16 characters";
  }
  return errors;
  };


  const nav = useNavigate();
  const handleHome = () =>
  {
    nav('/Home')
  }
  const handleSignup = () =>{
    nav('/Signup')
  }

  return (
    <div className='login'>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email or Phone number"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className='error'>{errors.email}</p>}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className='error'>{errors.password}</p>}
            {(dis)?
              <Button
            
            type="submit"
            fullWidth
            variant="contained"
            color="error"
            sx={{ mt: 4, mb: 3 }}
            onClick={handleHome}>SignUp</Button>:<Button
            
            type="submit"
            fullWidth
            variant="contained"
            color="error"
            sx={{ mt: 4, mb: 3 }}
            >SignIn</Button>}
            
            
            
            <Grid container spacing={0} justifyContent='center' alignItems='center' direction='column'>
              <Grid item xs={12}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link href="#" variant="body2" onClick={handleSignup}>
                  {"New customer? Sign Up now"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
  }