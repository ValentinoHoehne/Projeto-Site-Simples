import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import { BrowserRouter } from 'react-router-dom';
import Sobre from '../pages/Sobre';
import Login from '../pages/Login';
import Navbar from '../components/navbar';

export default function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/sobre" element={<Sobre />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}