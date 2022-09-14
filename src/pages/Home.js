import Spline from '@splinetool/react-spline';
import { HiMenu } from 'react-icons/hi';
import { MdOutlineLightMode } from 'react-icons/md'
import { MdOutlineNightlight } from 'react-icons/md'
import { CgClose } from 'react-icons/cg'
import imgProfile  from '../images/caio.jpg'
import '../App.css';
import '../styles/dark.css'
import '../styles/light.css'
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';



function Home() {
  const [ mode, setMode ] = useState('light');
  const [ menu, setMenu ] = useState(false);

  const gandalf = useRef();
  const balrog = useRef()

  function onLoad(spline) {
    const objGandalf = spline.findObjectById('3de10e1b-89fd-41ef-8806-0af03de3e680');
    const objBalrog = spline.findObjectById('775607fc-0002-4a3c-83bf-08628c9a0218');

    console.log(objGandalf);
    gandalf.current = objGandalf;
    balrog.current = objBalrog;
  }

  function moveObj() {
    if(mode === 'light') {
      gandalf.current.position.y += 11000;
      balrog.current.position.y += -11000;
    } else {
      gandalf.current.position.y += -11000;
      balrog.current.position.y += 11000;
    }
  }


  function handleClickMode() {
    moveObj()
    if(mode === 'dark') {
      setMode('light')
    } else {
      setMode('dark')
    }
  };

  function handleClickMenu() {
      setMenu(!menu)
  };
    
  return (
    <div className={`body-${mode}`}>
      <header className={`header-${mode}`}>
      <div className={`name-${mode}`}>
        <h2>{`< Caio Alexandre />`}</h2>
      </div>
        <div className='button'>
          {
            mode === 'dark' ? (
              <button onClick={ handleClickMode } className={`buttons-${mode}`}>
                <MdOutlineNightlight className={`icons-${mode}`} />
              </button>
                         
            ) : (
              <button onClick={ handleClickMode} className={`buttons-${mode}`}>
                <MdOutlineLightMode className={`icons-${mode}`} />
              </button>
            )
          }
          <button onClick={ handleClickMenu } className={`buttons-${mode}`}>
            {
              !menu ? (<HiMenu className={`icons-${mode}`} />) : (
                <CgClose className={`icons-${mode}`} />
              )
            }
          </button>
        </div>
      </header>
      <main>
        <div className={`profile-${mode}`}>
          <img src={ imgProfile } alt='' />
          <h1>Olá, eu me chamo Caio</h1>
          <p><strong>Desenvolvedor Web Front-End</strong></p>
        </div>
        <div className='model'>
          <Spline scene="https://prod.spline.design/7mAcYGRsPWhK3Tds/scene.splinecode" onLoad={ onLoad } />
        </div>
        <div className={`profile-${mode}`}>
          <h2>Sobre Mim</h2>
          <p>Olá,eu me chamo Caio, tenho 19 anos e sou natural de Belo Horizonte/MG, atualmente eu curso desenvolvimento web na Trybe. Desde pequeno sempre gostei muito de criar e inventar coisas, creio que por isso eu goste tanto da programação, uma vez que ela nos possibilita tanto criar quanto aperfeiçoar codigos. Quero me tornar um bom programador e seguir exercendo essa vontate de criar, sei que já estou trilhando esse caminho. </p>
        </div>
        <div className={`navbar-${menu}-${mode}`}>
          <ul className='links'>
            <li className="links-mode">
              <Link className='redirect' to='/login'>Home</Link>
            </li>
            <li className="links-mode">
            <Link className='redirect' to='/login'>Sobre</Link>
            </li>
            <li className="links-mode">
            <Link className='redirect' to='/login'>Contato</Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Home;