import './navbar.css'
import { Link } from 'react-router-dom'



export default function Navbar(){
    return(
        <>
            <div id='tudo'>
                <Link to="/home"><button id='botao'>Home</button></Link>
                <Link to="login"><button id='botao'>Login</button></Link>
                <Link to="/sobre"><button id='botao'>Sobre</button></Link>
            </div>
        </>
    )
}