import React from 'react'
import './House.css'
import img from './images/house.jpg';
import img1 from './images/hwinvi.jpg';
import img2 from './images/yaagam.jpeg';
import img3 from './images/cow.jpeg';
import img4 from './images/photo.jpeg';
import img5 from './images/food.jpeg';
import img6 from './images/gift.jpeg';
import bg from './images/ho.jpeg';
import bg1 from './images/bg1 (1).webp';
import Toolbar from '../Toolbar';
const App = () => {
  return (
    <div  style={{backgroundImage:`url(${bg})`}}>
      <Toolbar/>
      <div>
           <h1 className='quote' style={{textAlign:'center'}}>MAY YOUR HOME BECOME A LITTLE PART OF HEAVEN ON HEART</h1>
           <img src={img} alt=" " className='Bdayimg'></img>
      </div>
      <div style={{backgroundImage:`url(${bg1})`}}>
      <div className='events'style={{backgroundImage:`url(${bg1})`}}>
           <h1 style={{textAlign:'center',color:'black'}} id='party'>HOUSEWARMING PARTY PLANNER</h1>
           <div className='warm'>
               <img src={img1} alt=" " className='hwimg'></img>
               <h2>INVITATION CARDS</h2>
               <p>We design warm and attractive invitation cards for every occasion you plan to celebrate. </p>
            </div>
            <div className='warm'>
               <img src={img2} alt=" " className='hwimg'></img>
               <h2>POOJA PANDIT</h2>
               <p>We arrange the rituals needed for the griha pravesh or housewarming. </p>
            </div>
            <div className='warm'>
               <img src={img3} alt=" " className='hwimg'></img>
               <h2>COW AND CALF WALK</h2>
               <p>We arrange cow and calf for the Govardhana pooja. </p>
            </div>
            <div className='warm'>
               <img src={img4} alt=" " className='hwimg'></img>
               <h2>PHOTOGRAPHY</h2>
               <p>We arrange photograpers and videographers to capture yuor day at the best way and make that day memorable to you. </p>
            </div>
            <div className='warm'>
               <img src={img5} alt=" " className='hwimg'></img>
               <h2>CATERING SUPPLY</h2>
               <p>Our caterers can deliver the party food. We can also make necessary plates, cups, napkins & decorations delivered to your hall. </p>
            </div>
            <div className='warm'>
               <img src={img6} alt=" " className='hwimg'></img>
               <h2>RETURN GIFTS</h2>
               <p>We arrange return gifts for the guests and relatives who visit your house. </p>
            </div>
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