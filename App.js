import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route, Outlet } from "react-router-dom";
import Home from "./Home/Home";
import Reception from "./Reception/Reception";
import Birthday from "./Birthday/Bday";
import Toolbar from "./Toolbar";
import Contact from "./Contact/Contact";
import Corporate from "./Corporate/Corp";
import About from "./About/About";
import Wedding from "./Wedding/Wed";
import House from "./House/House";
import Get from "./Gettogether/Get";
import Signin from "./Signin";
import Signup from "./Signup";
const App=()=>{
    const shouldShowToolbar = window.location.pathname !== "/Signin" && window.location.pathname !== "/Signup";
    return(
        <BrowserRouter>
        {/*shouldShowToolbar && <Toolbar />*/} 
        <Routes>
        <Route path="/" element={<Signin/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route> 
        <Route path="/Home" element={<Home/>}></Route>
        
        <Route path="/Home/Reception" element={<Reception/>}></Route>
        <Route path="/Home/Corporate" element={<Corporate/>}></Route>
        <Route path="Home/Birthday" element={<Birthday/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="Home/Wedding" element={<Wedding/>}></Route>
        <Route path="Home/House" element={<House/>}></Route>
        <Route path="Home/Get" element={<Get/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default App