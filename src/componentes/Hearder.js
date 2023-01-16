import { AppBar, Box, Button, IconButton, Menu, MenuItem, Slide, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import MenuIcon from '@mui/icons-material/Menu';
import Context from "../context/Context";
import { useNavigate } from "react-router-dom";

function Header () {
    const {
      mode, setMode,
      open, setOpen,
      text, setText,
      colorH, setColorH,
      setColorCard,
      iconButton, setIconButton,
      buttonMode, setButtonMode,
      setColorTf
    } = useContext(Context);

    const [transiçaoLight, setTransiçaoLight] = useState(true);
    const [transiçaoDark, setTransiçaoDark] = useState(false);
    // const [teste, setTeste] = useState('light');

    const navigate =  useNavigate();
    
    
    function handleClickMenu() {
      setOpen(true)
    };
    
    useEffect(() => {
      setOpen(false)
    }, [setOpen])

    // const teste = async () => {
    //   const body = document.getElementsByTagName('body')[0];
    //   setMode('light');
    //   setText('textPrimary');
    //   setColorH('primary.main');
    //   setColorCard('#E7D7C6');
    //   setIconButton('action');
    //   body.style.backgroundColor = '#f0e7db';
    // }

   const handleClickMode = async () => {
      const body = document.getElementsByTagName('body')[0];
      // setTransiçao(true);
          // setTransiçaoLight(false);
          // setTimeout(() => {}, 1000)
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
            body.style.backgroundColor = '#202023';
      }
    }

    return (
        <Box>
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
            {/* <Slide in={transiçao} direction="up" mountOnEnter unmountOnExit> */}
            {/* <Collapse> */}
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
            {/* </Collapse> */}
            {/* </Slide> */}
            <IconButton onClick={ handleClickMenu }>
              <MenuIcon
                color={iconButton}
              />
            </IconButton>
          </Box>
        </AppBar>
        <Menu 
          sx={{ mt: -2, }}
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
        </Box>
    )
}

export default Header;