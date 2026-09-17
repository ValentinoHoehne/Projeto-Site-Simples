import { Link } from 'react-router-dom'
import './botao.css'

export default function Bsobre() {
    return (
        <>
            <Link id='botao' to="/sobre">
                Sobre
            </Link>
        </>
    )
}