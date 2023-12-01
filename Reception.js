import React from 'react'
//import './App.css'
import img from './Images/recepbg.jpg';
import img1 from './Images/recepimg.jpg';
import img2 from './Images/recepinv.jpg';
import img3 from './Images/recepst.jpg';
import img4 from './Images/recepmusic.jpg';
import img5 from './Images/recepmeh.jpg';
import img6 from './Images/recepbea.jpg';
import img7 from './Images/recepent.jpeg';
import img8 from './Images/recepbg2.webp';
import img9 from './Images/recepcat.webp';
import img10 from './Images/recepvh.webp';
import img11 from './Images/recepph.jpg';
import img12 from './Images/recepbg1.jpg';
/*import img2 from './Images/Birthday/download (6).jfif';
import img3 from './Images/Birthday/cakes.jfif';
import img4 from './Images/Birthday/gift.jfif';
import img5 from './Images/Birthday/pv.jfif';
import img6 from './Images/Birthday/food.jfif';
import img7 from './Images/Birthday/Bg.jpeg';
import img8 from './Images/Birthday/Bg1.jfif';
import img9 from './Images/Birthday/Bg2.jpeg';*/
import './Reception.css';
import Toolbar from'../Toolbar';
//import {useNavigate} from "react-router-dom";
const App = () => {
   
  return (
    <div>
      <Toolbar/>
      <div style={{backgroundImage:`url(${img})`}}>
           <h1 className='bdayquote' style={{textAlign:'center',color:'black'}}>A HAPPY MARRIAGE IS A LONG CONVERSATION THAT SEEMS TOO SHORT</h1>
           <img src={img1} alt=" " className='Bdayimg'></img>
      </div>
      <div className='events'  style={{backgroundImage:`url(${img12})`,height:'1500px'}}>
           <h1 style={{textAlign:'center',color:'white'}}>RECEPTION SERVICES</h1>
           <div className='cake' style={{backgroundImage:`url(${img8})`}}>
               <img src={img2} alt=" " className='cakeimg'></img>
               <h2>INVITATION CARDS</h2>
               <p>We design attractive and warm invitation cards for every occasion you plan to celebrate. </p>
            </div>
            <div className='cake' style={{backgroundImage:`url(${img8})`}}>
               <img src={img3} alt=" " className='cakeimg' ></img>
               <h2>STAGE DECORATION</h2>
               <p>We turn your big day into an unforgettable ambience for your guests to enjoy.</p>
            </div>
            <div className='cake' style={{backgroundImage:`url(${img8})`}}>
               <img src={img4} alt=" " className='cakeimg'></img>
               <h2>WEDDING MUSIC</h2>
               <p>We offer a music band to make the event more enlightening.<br></br><br></br></p>
            </div>
            <div className='cake' style={{backgroundImage:`url(${img8})`}}>
               <img src={img5} alt=" " className='cakeimg'></img>
               <h2>MEHENDI ARTIST</h2>
               <p>Applying mehendi to the bride and the groom before the wedding is one of the oldest Indian traditional ritual</p>
            </div>
            <div className='cake' style={{backgroundImage:`url(${img8})`}}>
               <img src={img11} alt=" " className='cakeimg'></img>
               <h3>PHOTO AND VIDEO SHOOT</h3>
               <p>Our professional photographer capture every feeling, action, love and gives touch to every single pic.<br></br><br></br></p>
            </div>
            <div className='cake' style={{backgroundImage:`url(${img8})`}}>
               <img src={img7} alt=" " className='cakeimg'></img>
               <h2>ENTERTAINMENT</h2>
               <p>We bring you the list of all the hot and latest happening entertaining events/activities<br></br><br></br></p>
            </div>
            <div className='cake' style={{backgroundImage:`url(${img8})`}}>
               <img src={img9} alt=" " className='cakeimg'></img>
               <h2>CATERING SUPPLY</h2>
               <p>We create a unique taste in your heart with our catering service and food is served with love.<br></br><br></br></p>
            </div>
            <div className='cake' style={{backgroundImage:`url(${img8})`}}>
               <img src={img10} alt=" " className='cakeimg'></img>
               <h2>VEHICLE ARRANGEMENT</h2>
               <p> We decorate the car with different items according to theme and colour combination.</p>
            </div>
            <div className='cake' style={{backgroundImage:`url(${img8})`}}>
               <img src={img6} alt=" " className='cakeimg'></img>
               <h2>BEAUTICIAN</h2>
               <p>We hunt for professional help to make the couple look more gorgeous during photo shoot.<br></br><br></br></p>
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
