// import Spline from '@splinetool/react-spline';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import NightlightIcon from '@mui/icons-material/Nightlight';
// import MenuIcon from '@mui/icons-material/Menu';
// import HomeIcon from '@mui/icons-material/Home';
import imgProfile  from '../images/caio.jpg'
import '../App.css';
import '../styles/dark.css'
import '../styles/light.css'
import { useContext } from 'react';
import { Avatar, Box, Button, Paper, Typography } from '@mui/material';
import Context from '../context/Context';
import Header from '../componentes/Hearder';
// import image from '../images/img.svg'

// const Image = styled('img')({});

// const Sline3D = styled(Spline)({})

function Home() {

  const {
    mode
  } = useContext(Context)
  // const [ mode, setMode ] = useState('light');
  // const [ open, setOpen ] = useState(false);

  // const gandalf = useRef();
  // const balrog = useRef()

  // function onLoad(spline) {
  //   const objGandalf = spline.findObjectById('3de10e1b-89fd-41ef-8806-0af03de3e680');
  //   const objBalrog = spline.findObjectById('775607fc-0002-4a3c-83bf-08628c9a0218');
  //   gandalf.current = objGandalf;
  //   balrog.current = objBalrog;
  //   console.log(gandalf.current.position.y);
  // }

  // function moveObj() {
  //   if(mode === 'light') {
  //     gandalf.current.position.y += 11000;
  //     // gandalf.current.position.x += 20;
  //     balrog.current.position.y += -11000;
  //   } else {
  //     gandalf.current.position.y += -11000;
  //     balrog.current.position.y += 11000;
  //     // balrog.current.position.x += 100;
  //   }
  // }


  // function handleClickMode() {
  //   if(mode === 'dark') {
  //     setMode('light')
  //   } else {
  //     setMode('dark')
  //   }
  // };

  // function handleClickMenu() {
  //     setOpen(true)
  // };
    
  return (
    <Box bgcolor="#f0e7db" height="100vh">
      <Header/>
      {/* <AppBar sx={{ display: 'flex', padding: 1 , flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}  className={`header-${mode}`}>
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
      </AppBar> */}
      {/* <Drawer anchor='right' open={open} onClose={() => {setOpen(false)}} >
        <Box bgcolor="#f0e7db" height="100%" display="flex" flexDirection="column" alignItems="center" gap={5} padding={5} >
        <Button fullWidth  sx={{ mt: 5}} variant="outlined" color="secondary">Home</Button>
        <Button fullWidth variant="outlined" color="secondary">Projetos</Button>
        <Button fullWidth  variant="outlined" color="secondary">Contato</Button>
        </Box>
      </Drawer> */}
      <Box display="flex" alignItems="center" gap={10} flexDirection="column">
        <Box gap={2} display="flex" flexDirection="column" alignItems="center" mt={10} className={`profile-${mode}`}>
      {/* <Box height="50vh">
      <Spline scene="https://prod.spline.design/u3GMvlhvPIByeUt8/scene.splinecode" />
      </Box> */}
          <Avatar sx={{ width: 90, height: 90, border: '3px solid whitesmoke' }} src={ imgProfile } alt='' />
          <Typography color="#011F26" textAlign="center" sx={{width: {xs: '75%', md: '90%'}}} fontWeight="bold" bgcolor="#E7D7C6" padding={0.5} paddingRight={3} paddingLeft={3} borderRadius={2} variant="h7">Olá, eu sou desenvolvedor web front-end!</Typography>
        </Box>
        <Paper sx={{ width: {xs: '75%', md: '50%'}, padding: 3, bgcolor: '#E7D7C6', display:'flex', flexDirection: 'column', borderRadius: 3, gap: 2 }} className={`profile-${mode}`}>
          <Typography sx={{ textDecoration: "underline", textUnderlineOffset: 5, textDecorationThickness: 3}} fontWeight="bold" variant="h5" alignSelf="center">Sobre mim</Typography>
          <Typography textAlign="justify" variant='h5'  color="#011F26" >Eu me chamo Caio, tenho 19 anos e sou natural de Belo Horizonte/MG. Desde pequeno sempre gostei muito de criar e inventar coisas, creio que por isso eu goste tanto da area de programação, uma vez que ela me possibilita expressar minha imaginação e vontade de criação atraves dos codigos. Tenho como vontade e objetivo evoluir cada vez mais como um programador, criando e aprimorando codigos que possam impactar a vida  de pessoas da melhor forma possivel. Estou trilhando esse caminho!  </Typography>
          <Button onClick={() => { 
            const body = document.getElementsByTagName('body')[0];
            // const main = document.getElementsByTagName('main')[0];
            body.style.backgroundColor = 'red'
            console.log(body);
            // console.log(main);
           }} >
            teste
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}

export default Home;