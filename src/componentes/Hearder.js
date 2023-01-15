import { AppBar, Box, Button, Drawer, IconButton, Slide, Typography } from "@mui/material";
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
      iconButton, setIconButton
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
            setTimeout(() => {setMode('light');}, 1000);
            setText('textPrimary');
            setColorH('primary.main');
            setColorCard('#E7D7C6');
            setIconButton('action');
            body.style.backgroundColor = '#f0e7db';
          } else {
            setTransiçaoLight(!transiçaoLight);
            setTransiçaoDark(!transiçaoDark);
            // setMode('dark');
            setTimeout(() => {setMode('dark');}, 1000);
            setText('textSecondary');
            setColorH('secondary.main');
            setColorCard('#404040');
            setIconButton('primary');
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
                    <NightlightIcon color="primary"/>
                  </IconButton>
                </Slide>
              ) : (
                <Slide appear={true} in={transiçaoLight} direction="down" mountOnEnter unmountOnExit>
                  <IconButton onClick={ handleClickMode}>
                    <LightModeIcon color="action"/>
                  </IconButton>
                </Slide>
              )
            }
            {/* </Collapse> */}
            {/* </Slide> */}
            <IconButton onClick={ handleClickMenu }>
              <MenuIcon color={iconButton}/>
            </IconButton>
          </Box>
        </AppBar>
        <Drawer anchor='right' open={open} onClose={() => {setOpen(false)}} >
        <Box bgcolor={colorH} height="100%" display="flex" flexDirection="column" gap={3} mt={-10} padding={5} >
          <Button onClick={() => { navigate('/') }} fullWidth sx={{ mt: 10 }} variant="outlined" color='buttons'>
            Home
          </Button>
          <Button onClick={() => { navigate('/projetos') }} fullWidth variant="outlined" color='buttons'>
            Projetos
          </Button>
          <Button onClick={() => { navigate('/contato') }} fullWidth  variant="outlined" color='buttons'>
            Contato
          </Button>
        </Box>
        </Drawer>
        </Box>
    )
}

export default Header;