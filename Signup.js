import * as React from 'react';
import { useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


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

export default function SignUp() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
  
    const [errors, setErrors] = useState({});
    const [dis,setdis]=useState(false)
     const handleSubmit = (event) => {
    
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
  const nav= useNavigate();
  const handleLogin = () =>{
    nav('/Signin')
  }
  const handleHome = () =>{
      nav('/Home')
    
  }

  


  return (
    <div className="signup">
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
         
         
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
             

              <Grid item xs={12}>
              <h2>SIGN UP TO PROCEED</h2>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                 
                  value={formData.email}
                  onChange={handleChange}
                 
                />
                {errors.email && <p className='error'>{errors.email}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  
                  value={formData.password}
                  onChange={handleChange}
                  
                />
                {errors.password && <p className='error'>{errors.password}</p>}
              </Grid>
             
            </Grid>
            
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
              >SignUp</Button>}
              
            
              
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2" onClick={handleLogin}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
        }