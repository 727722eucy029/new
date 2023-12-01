import * as React from 'react';
import { AppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Outlet, useNavigate } from 'react-router-dom';
import img from './About/image/logo.jpeg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const pages = [{id:'1',value:'Home',func:'Home'},
               {id:'2',value:'About',func: 'About'},
               {id:'3',value:'Contact',func: 'Contact'}]
const func=['','Wedding','Enquiry','Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate=useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    
    navigate(`/${page.func}`)
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleClick=()=>{
    navigate('./')
  }
  return (
    <AppBar position="static" sx={{height:'100px'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{paddingTop:'20px',paddingBottom:'20px'}}>
          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                <Button style={{color:'white'}} onClick={handleClick}> 
                back
                </Button>
              </Box>
              {/*<Typography variant="h5" noWrap component="div" sx={{ mr: 2, flexGrow: 1, fontFamily: 'monospace', fontWeight: 700,letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none' }}>
                <img src={img} alt="logo" className='logo' style={{height:'60px',width:'60px'}}></img>
  </Typography>*/}
  <h5>STATE EVENT MANAGEMENT</h5>
  <Typography
  variant="h5"
  noWrap
  component="div"
  sx={{
    mr: 2,
    flexGrow: 1,
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',
    marginTop: '-40px', // Adjust this value to move the logo upwards
  }}
>
  <img src={img} alt="logo" className='logo' style={{ height: '60px', width: '60px',marginLeft:'3px' }} />
</Typography>
       
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button key={page.value} onClick={() => handleCloseNavMenu(page)}  style={{color:'white'}}>
                  {page.value}
                </Button>
              ))}
            </Box>
            
            


              
            </Box>
          </Box>

          <Box>
          
            {/*<Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
              </Tooltip>*/}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <Outlet />
    </AppBar>
  );
}

export default ResponsiveAppBar;
