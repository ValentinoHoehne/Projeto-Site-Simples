import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import { BrowserRouter } from 'react-router-dom';
import Sobre from '../pages/sobre';
import Login from '../pages/login';

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Route path="/home" element={<Home />}/>
            <Route path="/sobre" element={<Sobre />}/>
            <Route path="/login" element={<Login />}/>
        </BrowserRouter>
    )

}