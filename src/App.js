import { HiMenu } from 'react-icons/hi';
import { MdOutlineLightMode } from 'react-icons/md'
import { MdOutlineNightlight } from 'react-icons/md'
import imgProfile  from './images/caio.jpg'
import './App.css';
import './styles/dark.css'
import './styles/light.css'
import { useState } from 'react';

function App() {
  const [ mode, setMode ] = useState('light')
  const [ menu, setMenu ] = useState(false)

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
        <div className='button'>
          <button onClick={ handleClickMenu } className={`buttons-${mode}`}>
            <HiMenu className={`icons-${mode}`} />
          </button>
        </div>
        <div className='name'>
            <h2>Portfolio</h2>
          </div>
        <div>
          {
            mode === 'dark' ? (
              <button onClick={ handleClickMode } className={`buttons-${mode}`}>
                <MdOutlineLightMode className={`icons-${mode}`} />
              </button>
            ) : (
              <button onClick={ handleClickMode } className={`buttons-${mode}`}>
                <MdOutlineNightlight className={`icons-${mode}`} />
              </button>
            )
          }
        </div>
      </header>
      <main>
        <div className={`navbar-${menu}-${mode}`}>
          <h1>teste</h1>
        </div>
        <div className={`profile-${mode}`}>
          <p>Olá, eu me chamo Caio Alexandre, e sou <span><strong>DESENVOLVEDOR WEB!</strong></span></p>
          <img src={ imgProfile } alt='' />
        </div>
      </main>
    </div>
  );
}
//
export default App;
