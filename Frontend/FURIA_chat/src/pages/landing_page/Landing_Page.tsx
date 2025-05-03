import './Landing_Page.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/image.png';

export function LandingPage() {
    const navigate = useNavigate();
    return (
        <div className="landing-page">
        <img className = "logo_FURIA" src={logo} alt="logo_FURIA" />
        <h1>Bem-vindo(a) ao FURIA Chat!</h1>
        <p>Sinta-se livre para tirar dúvidas.</p>
        <button onClick={()=>navigate("/chat")} className="start-chat-button">Começar</button>
        </div>
    );
}