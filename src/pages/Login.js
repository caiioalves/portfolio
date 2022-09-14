import '../App.css';
import Spline from '@splinetool/react-spline';
import { BsFillQuestionSquareFill } from "react-icons/bs"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Login() {
  const [hidden, setHidden] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();

  const handleClick = () => {
    setHidden(!hidden);
  }

  const handleChange = ({ target }) => {
    if (target.value === "amigo") {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  return (
    <div className="scene">
      <button className="btn-scene" onClick={ handleClick } type="button">
        <BsFillQuestionSquareFill className="icon-question"/>
      </button>
      { hidden && (
        <div className="input-scene">
        <h3>Digite "amigo" e entre</h3>
        <input onChange={ handleChange } type="text"/>
        <button type="button" onClick={ () => { navigate("/home") } } disabled={disabled}>Entrar</button>
      </div>
      ) }
      <Spline className="moria" scene="https://prod.spline.design/baGkABIRYnmPTGa4/scene.splinecode" />
    </div>
  );
}


export default Login;