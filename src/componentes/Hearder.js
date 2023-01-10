import { AppBar, Box, Button, Drawer, IconButton, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
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
    } = useContext(Context)

    const navigate =  useNavigate();
    
    
    function handleClickMenu() {
      setOpen(true)
    };
    
    useEffect(() => {
      setOpen(false)
    }, [setOpen])
    
    function handleClickMode() {
      const body = document.getElementsByTagName('body')[0];
          if(mode === 'dark') {
            setMode('light');
            setText('textPrimary');
            setColorH('primary.main');
            setColorCard('#E7D7C6');
            body.style.backgroundColor = '#f0e7db';
          } else {
            setMode('dark');
            setText('textSecondary');
            setColorH('secondary.main');
            setColorCard('#404040');
            body.style.backgroundColor = '#202023';
      }}

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
          <Typography  fontFamily="VT323, monospace" variant="h5" fontWeight="bold" color={text}  className={`name-title-${mode}`}>{`< Caio Alexandre />`}</Typography>
        </Box>
          <Box>
            {
              mode === 'dark' ? (
                <IconButton onClick={ handleClickMode }>
                  <NightlightIcon/>
                </IconButton>
                           
              ) : (
                <IconButton onClick={ handleClickMode}>
                  <LightModeIcon/>
                </IconButton>
              )
            }
            <IconButton onClick={ handleClickMenu }>
              <MenuIcon/>
            </IconButton>
          </Box>
        </AppBar>
        <Drawer anchor='right' open={open} onClose={() => {setOpen(false)}} >
        <Box bgcolor={colorH} height="100%" display="flex" flexDirection="column" gap={3} mt={-10} padding={5} >
          <Button onClick={() => { navigate('/') }} fullWidth sx={{ mt: 10 }} variant="outlined" color='buttons'>Home</Button>
          <Button onClick={() => { navigate('/projetos') }} fullWidth variant="outlined" color='buttons'>Projetos</Button>
          <Button onClick={() => { navigate('/contato') }} fullWidth  variant="outlined" color='buttons'>Contato</Button>
        </Box>
        </Drawer>
        </Box>
    )
}

export default Header;