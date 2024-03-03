import ReactDOM  from 'react-dom/client';
import { BrowserRouter, Routes,Route } from 'react-router-dom';




import './index.css';


import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Galary from "./pages/Galary";
import Contacts from "./pages/Contacts";




export default function App2(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Layout/>}>
          <Route index element = {<Home />}/>
          <Route path='about' element = {<About />}/>
          <Route path='galary' element = {<Galary />}/>
          <Route path='contacts' element = {<Contacts />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App2/>);
