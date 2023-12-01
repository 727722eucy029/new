import * as React from 'react';
//import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import img from './Images/homebg1.jpg';
import img1 from './Images/weddinghm.jpg';
import img2 from './Images/Birthdayhm.jpg';
import img3 from './Images/receptionhm.jpg';
import img4 from './Images/Housewarminghm.jpg';
import img5 from './Images/Corporatehm.jpg';
//import img6 from './Images/Seminarhm.jpg';
import img6 from './Images/gethm.jpg';
//import Appbar from './AppBar.js';
import Toolbar from '../Toolbar';
import { useNavigate } from 'react-router-dom';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://mui.com/">
    Your Website
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
    </Typography>
  );
}
const cardImages=[img1,img2,img3,img4,img5,img6];
const value=['WEDDING','BIRTHDAY','RECEPTION','HOUSE WARMING','CORPORATE EVENTS','GET TOGETHER']
//const fun=[{handlerecep}]
const cards = [
  {id:1 , imgid:0, content:"Weddings are always special.Make them even more memorable with us.",func:'Wedding'},
  {id:2,imgid:1, content:"Adding another year to your account is definitely an event to celebrate.",func:'Birthday'},
  {id:3,imgid:2, content:"What is more special than celebrating your happiness with your loved ones.",func:'Reception'},
  {id:4,imgid:3, content:"A own house is the outcome of hardwork.Lets celebrate as its truely a achievement.",func:'House'},
  {id:5,imgid:4, content:"Workplace is not only to do work but also to celebrate the growth of our colleagues.",func:'Corporate'},
  {id:6,imgid:5, content:"What can be a better stress burster than a get together with our friends.",func:'Get'},
]

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  const navigate=useNavigate();
  const handlerecep =(card)=>{
    navigate(`./${card.func}`)
/*console.log("view=====>>>>>>>>>>",cards)
if(cards[0].imgid === 0){
  navigate('/Reception')
}
if(cards[1].imgid === 1){
  navigate('/Birthday')
}*/
  }

  return (
    
    <ThemeProvider theme={defaultTheme} style={{backgroundImage:`url(${img})`}}>

      <CssBaseline />
      <Toolbar/>
      {
          /*<AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
  </AppBar>*/}
      <main  style={{backgroundImage:`url(${img})`}}>
        {/* Hero unit */}
        <Box
          /*sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}*/
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
            
              STATE EVENT MANAGEMENT
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph style={{fontFamily:'cursive',border:'inline'}}>
            Every event comes once in our life so they give us very precious memories to cherish for a life time. Let us make them extraordinary with Coimbatore Event Management.
            </Typography>
            {/*<Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
        </Stack>*/}
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    
                    image={cardImages[card.imgid]}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {value[card.imgid]}
                    </Typography>
                    <Typography>
                      <p>
                        {card.content}
                      </p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" style={{align:'center'}} onClick={() => handlerecep(card)}>View</Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.8)', p: 6 ,zIndex:'1'}} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
          
        >
        <h3>Address:
        State Event Management,
        BK Pudur,
        Kuniamuthur,
        Coimbatore-641008.<br></br>
        Contact:987654321,978665432<br></br>
        Email:stateeventmanagement@gmail.com<br></br>
        </h3>
          
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}