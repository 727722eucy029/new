import React from 'react'
import './About.css';
import img from './image/logo.jpeg';
import Toolbar from '../Toolbar';
const About = () => {
  return (
<div>
<Toolbar/>
    <div className='about' >
    
    <h1 style={{textAlign:'center'}}>ABOUT STATE EVENT MANAGEMENT</h1>
    <div className='para'><p><b>Welcome to State Event Management </b>– Event Planner in Coimbatore
    State Event Management works with you to deliver your events anywhere around the Coimbatore, offering the highest standards, attention to detail and a flexible and consultative approach providing as little or as much help as you need to support you fully for your important event. Our aim is to create each event that energize and recharge your family members, resulting in greater productivity and success.
    
    We plan each event after getting proper understanding from your organization, budgets, ethos and requirements. Each of our events come with a combination of special programs like air bubbles, balloon decoration, popcorn & candy, ending gifts, D.J, magic show, game show, orchestra, welcome girls, interior decors, vegetable carving, tattoos, live art, mehandi, mickey mouse, surprise gifts and jumping balloon.
    
    </p></div>
    <div className='logo'><img src={img} alt="logo"></img></div>
    </div>
    <div className='Prop'>
       <div className='box' >
        <h2>SATISFACTION</h2>
         <p>
         We work for customer contentment and not for money. This is the main reason for getting more clients and more events.<br></br><br></br></p>
        </div>
        <div className='box' >
        <h2>TRUSTWORTHY</h2>
         <p>We are very reliable to all clients for organising an event. We also give suggestion for clients in planning the event according to their budget.  </p>
        </div>
        <div className='box' >
        <h2>PLANNING</h2>
         <p>We plan, research, deliver and evaluate every element of an event. We ensure client’s opinion at every touch point.<br></br><br></br></p>
        </div>
    </div>
     </div>
    
  )
}

export default About
