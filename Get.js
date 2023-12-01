import React from 'react'
import './Get.css'
import img from './images/getto.jpg';
import img1 from './images/getlocation.jpg';
import img2 from './images/getparking.webp';
import img3 from './images/getaccomodation.webp';
import img4 from './images/getfun.jpg';
import img5 from './images/getfood.webp';
import img6 from './images/getphoto.jpeg';
import bg from './images/getbg.jpg';
import bg1 from './images/getbg1.jpeg';
import bg2 from './images/getbg2.jpg';
import Toolbar from '../Toolbar';
const App = () => {
  return (
    <div  style={{backgroundImage:`url(${bg})`}}>
      <Toolbar/>
      <div>
           <h1 className='quote' style={{textAlign:'center',color:'black'}}>Gettogether is made to see our old friends and it is a chance to regain our old memories.</h1>
           <img src={img} alt=" " className='Bdayimg'></img>
      </div>
     
      <div className='events'style={{backgroundImage:`url(${bg2})`}}>
           <h1 style={{textAlign:'center',color:'black'}} id='party'>Gettogether Services</h1>
           <div className='warm'style={{backgroundImage:`url(${bg1})`}}>
               <img src={img1} alt=" " className='hwimg'></img>
               <h2>Location</h2>
               <p>We arrange places or location which was near to every transport facilities and decorate it according to your theme.</p>
            </div>
            <div className='warm'style={{backgroundImage:`url(${bg1})`}}>
               <img src={img2} alt=" " className='hwimg'></img>
               <h2>Vechicle</h2>
               <p>We arrange vechiles for the guests who were all visiting the party,which will be safe and on time.  </p>
            </div>
            <div className='warm'style={{backgroundImage:`url(${bg1})`}}>
               <img src={img3} alt=" " className='hwimg'></img>
               <h2>Accomodation</h2>
               <p>We arrange the best staying facilities for the guests who were willing to stay and coming from long distance.</p>
            </div>
            <div className='warm'style={{backgroundImage:`url(${bg1})`}}>
               <img src={img4} alt=" " className='hwimg'></img>
               <h2>Fun Activities</h2>
               <p>We have more fun activities arrangement at the party area to make your day best with beautiful memories. </p>
            </div>
            <div className='warm'style={{backgroundImage:`url(${bg1})`}}>
               <img src={img5} alt=" " className='hwimg'></img>
               <h2>Catering</h2>
               <p>Our caterers can deliver the party food. We can also make necessary plates, cups, napkins & decorations delivered to your hall. </p>
            </div>
            <div className='warm'style={{backgroundImage:`url(${bg1})`}}>
               <img src={img6} alt=" " className='hwimg'></img>
               <h2>Photography</h2>
               <p>We arrange photograpers and videographers to capture yuor day at the best way and make that day memorable to you.  </p>
            </div>
      
      </div>
      <div className="footer"><b>
      Address:
        State Event Management,
        BK Pudur,
        Kuniamuthur,
        Coimbatore-641008.<br></br>
        Contact:987654321,978665432<br></br>
        Email:stateeventmanagement@gmail.com<br></br></b>
      </div>
    </div>
  )
}

export default App