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
      open, setOpen
    } = useContext(Context)

    const navigate =  useNavigate();
    
  function handleClickMode() {
        if(mode === 'dark') {
          setMode('light')
        } else {
          setMode('dark')
    }}

    function handleClickMenu() {
        setOpen(true)
    };

    useEffect(() => {
      setOpen(false)
    }, [setOpen])

    return (
        <Box>
        <AppBar sx={{ display: 'flex', padding: 1 , flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}  className={`header-${mode}`}>
        <Box>
          <Typography  fontFamily="VT323, monospace" variant="h5" fontWeight="bold" color="#011F26"  className={`name-title-${mode}`}>{`< Caio Alexandre />`}</Typography>
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
        <Box bgcolor="#f0e7db" height="100%" display="flex" flexDirection="column" alignItems="center" gap={5} padding={5} >
        <Button onClick={() => { navigate('/') }} fullWidth  sx={{ mt: 5}} variant="outlined" color="secondary">Home</Button>
        <Button onClick={() => { navigate('/projetos') }} fullWidth variant="outlined" color="secondary">Projetos</Button>
        <Button onClick={() => { navigate('/contato') }} fullWidth  variant="outlined" color="secondary">Contato</Button>
        </Box>
        </Drawer>
        </Box>
    )
}

export default Header;