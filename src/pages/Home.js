import { HiMenu } from 'react-icons/hi';
import { MdOutlineLightMode } from 'react-icons/md'
import { MdOutlineNightlight } from 'react-icons/md'
import { CgClose } from 'react-icons/cg'
import imgProfile  from '../images/caio.jpg'
import '../App.css';
import '../styles/dark.css'
import '../styles/light.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <h2>{`< Caio Alexandre />`}</h2>
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
        <div className={`profile-${mode}`}>
          <img src={ imgProfile } alt='' />
          <h1>Olá, eu me chamo Caio</h1>
          <p><strong>Desenvolvedor Web Front-End</strong></p>
        </div>
        <div className={`profile-${mode}`}>
          <h2>Sobre Mim</h2>
          <p>S</p>
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