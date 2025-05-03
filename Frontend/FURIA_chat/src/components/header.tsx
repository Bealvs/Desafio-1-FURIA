import { useNavigate } from "react-router-dom";
import "./header.css";

export function Header() {
  const navigate = useNavigate();

  function handleGoHome() {
    navigate("/");
  }

  return (
    <div className="header">
      <button onClick={handleGoHome} className="back-button">
        ← Início
      </button>
    </div>
  );
}