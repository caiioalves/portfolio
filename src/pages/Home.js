import { HiMenu } from 'react-icons/hi';
import { MdOutlineLightMode } from 'react-icons/md'
import { MdOutlineNightlight } from 'react-icons/md'
import { GiRing } from 'react-icons/gi'
import { CgClose } from 'react-icons/cg'
import imgProfile  from '../images/caio.jpg'
import '../App.css';
import '../styles/dark.css'
import '../styles/light.css'
import { useState } from 'react';

function Home() {
  const [ mode, setMode ] = useState('light');
  const [ menu, setMenu ] = useState(false);


  function handleClickMode() {
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
        <GiRing className={`icons-${mode}`} />
        <h2>Caio Alexandre</h2>
      </div>
        <div className='button'>
          {
            mode === 'dark' ? (
              <button onClick={ handleClickMode } className={`buttons-${mode}`}>
                <MdOutlineNightlight className={`icons-${mode}`} />
              </button>
                         
            ) : (
              <button onClick={ handleClickMode } className={`buttons-${mode}`}>
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
        <div className={`navbar-${menu}-${mode}`}>
          <ul className='links'>
            <li>Home</li>
            <li>Sobre</li>
            <li>Contato</li>
          </ul>
        </div>
        <div className={`profile-${mode}`}>
          <img src={ imgProfile } alt='' />
          <p>Olá, eu me chamo Caio Alexandre, e sou <span><strong>DESENVOLVEDOR WEB!</strong></span></p>
        </div>
      </main>
    </div>
  );
}

export default Home;