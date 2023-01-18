import { AppBar, Box, Button, CircularProgress, IconButton, Menu, MenuItem, Slide, Typography } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import MenuIcon from '@mui/icons-material/Menu';
import Context from "../context/Context";
import { useNavigate } from "react-router-dom";
import Spline from "@splinetool/react-spline";

function Header () {
    const {
      mode, setMode,
      open, setOpen,
      text, setText,
      colorH, setColorH,
      setColorCard,
      iconButton, setIconButton,
      buttonMode, setButtonMode,
      setColorTf, setColorTitle,
    } = useContext(Context);

    const [transiçaoLight, setTransiçaoLight] = useState(true);
    const [transiçaoDark, setTransiçaoDark] = useState(false);

    const navigate =  useNavigate();
    
    function handleClickMenu() {
      setOpen(true)
    };
    
    useEffect(() => {
      setOpen(false)
    }, [setOpen])

   const handleClickMode = async () => {
      const body = document.getElementsByTagName('body')[0];
          if(mode === 'dark') {
            setTransiçaoLight(!transiçaoLight);
            setTransiçaoDark(!transiçaoDark);
            setTimeout(() => {setMode('light');}, 500);
            setText('textPrimary');
            setColorH('primary.main');
            setColorCard('#E7D7C6');
            setIconButton('action');
            setButtonMode('buttonsLight');
            setColorTf('#BF3604');
            setColorTitle('#BF3604');
            light1.current.emitEvent('mouseDown');
            light2.current.emitEvent('mouseDown');;
            body.style.backgroundColor = '#f0e7db';
          } else {
            setTransiçaoLight(!transiçaoLight);
            setTransiçaoDark(!transiçaoDark);
            setTimeout(() => {setMode('dark');}, 500);
            setText('textSecondary');
            setColorH('secondary.main');
            setColorCard('#404040');
            setIconButton('primary');
            setButtonMode('buttonsDark');
            setColorTf('#04B2D9');
            setColorTitle('#04B2D9');
            light1.current.emitEvent('mouseUp');
            light2.current.emitEvent('mouseUp');
            body.style.backgroundColor = '#202023';
      }
    }

    const [carregando, setCarregando] = useState(true);
    
    const light1 = useRef();
    const light2 = useRef();

    const onLoad = (spline) => {   
      const objLight1 = spline.findObjectByName('luz');
      const objLight2 = spline.findObjectByName('luz 2');
      
      light1.current = objLight1;
      light2.current = objLight2;
      
      setCarregando(false);
    }
    
    return (
        <Box width="100%"> 
        <AppBar
          sx={{ 
            display: 'flex', 
            padding: 1 , 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            backgroundColor: colorH 
          }} 
          >
        <Box>
          <Typography  
            fontFamily="VT323, monospace"
            variant="h5" 
            fontWeight="bold" 
            color={text}
          >
            {`< Caio Alexandre />`}
          </Typography>
        </Box>
          <Box>
            {
              mode === 'dark' ? (
                <Slide
                  appear={true} 
                  in={transiçaoDark} 
                  direction="down" 
                  mountOnEnter 
                  unmountOnExit
                >
                  <IconButton onClick={ handleClickMode }>
                    <NightlightIcon color="buttonsDark"/>
                  </IconButton>
                </Slide>
              ) : (
                <Slide appear={true} in={transiçaoLight} direction="down" mountOnEnter unmountOnExit>
                  <IconButton onClick={ handleClickMode}>
                    <LightModeIcon color="buttonsLight"/>
                  </IconButton>
                </Slide>
              )
            }
            <IconButton onClick={ handleClickMenu }>
              <MenuIcon
                color={iconButton}
              />
            </IconButton>
          </Box>
        <Menu 
          sx={{ top: -2, position: 'absolute' }}
          open={open} 
          onClose={() => {setOpen(false)}}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem>
            <Button 
              onClick={() => {
                navigate('/');
                setOpen(false); 
              }}
              fullWidth
              variant="text"
              color={buttonMode}
            >
              Home
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              onClick={() => { 
                navigate('/projetos');
                setOpen(false); 
              }} 
              fullWidth 
              variant="text" 
              color={buttonMode}
            >
              Projetos
            </Button>
          </MenuItem>
          <MenuItem>
            <Button 
              onClick={() => { 
                navigate('/contato');
                setOpen(false); 
              }} 
              fullWidth  
              variant="text" 
              color={buttonMode}
            >
              Contato
            </Button>
          </MenuItem>
        </Menu>
        </AppBar>
        <Box width="100%" display="flex" justifyContent="center" alignItems="center" mt={8} height="40vh">
        { carregando === true && (<CircularProgress color="secondary" />)}
        <Spline scene="https://prod.spline.design/7mAcYGRsPWhK3Tds/scene.splinecode" onLoad={onLoad}/>
       </Box>
        </Box>
    )
}

export default Header;