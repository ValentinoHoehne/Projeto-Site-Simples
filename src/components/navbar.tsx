import './navbar.css'
import { Link } from 'react-router-dom';
import Bhome from './button/Bhome.tsx';
import Blogin from './button/Blogin.tsx';
import Bsobre from './button/Bsobre.tsx';



export default function Navbar(){
    return(
        <>
            <div id='tudo'>
                <Bhome></Bhome>
                <Blogin></Blogin>
                <Bsobre></Bsobre>
            </div>
        </>
    )
}