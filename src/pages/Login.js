import '../App.css';
import Spline from '@splinetool/react-spline';
import { useNavigate } from 'react-router-dom';


function Login() {

  const navigate = useNavigate();
  
  return (
    <div className="scene">
      <button onClick={ () => navigate('/home') } type="button">Entrar</button>
      <Spline className="moria" scene="https://prod.spline.design/baGkABIRYnmPTGa4/scene.splinecode" />
    </div>
  );
}

export default Login;