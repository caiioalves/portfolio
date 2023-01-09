import imgProfile  from '../images/caio.jpg';
import certificadoFrontEnd  from '../images/certificadoFrontEnd.PNG';
import certificadoFundamentos  from '../images/certificadoFundamentos.PNG';
import '../App.css';
import '../styles/dark.css'
import '../styles/light.css'
import { useContext } from 'react';
import { Avatar, Box, Card, CardContent, CardMedia, Link, List, ListItem, Paper, Typography } from '@mui/material';
import Context from '../context/Context';
import Header from '../componentes/Hearder';

const certificados = [
  {
    imagem: certificadoFundamentos,
    texto: 'Certificado 1',
    link: 'https://www.credential.net/9db53484-24d1-46c0-8ef4-17561c3a626e#gs.mq9z7y'
  },
  {
    imagem: certificadoFrontEnd,
    texto: 'Certificado 2',
    link: 'https://www.credential.net/f9d2ec17-81d9-47e9-ae6d-413cfca61971#gs.mqdav2'
  }
];

function Home() {

  const { mode } = useContext(Context);
  const habilidades = ['Html', 'CSS', 'JavaScript', 'Testes Unitários','React', 'Redux', 'Context API', 'Hooks', 'Material UI' ,'React Testing Library', 'MySQL', 'Docker', 'Node.js', 'Express', 'Api Rest', 'Git', 'GitHub', 'Terminal Linux' ]
    
  return (
    <Box
      height="100vh"
    >
      <Header/>
      <Box display="flex" alignItems="center" gap={10} flexDirection="column">
        <Box gap={2} display="flex" flexDirection="column" alignItems="center" mt={10} className={`profile-${mode}`}>
          <Avatar sx={{ width: 90, height: 90, border: '3px solid whitesmoke' }} src={ imgProfile } alt='' />
          <Typography color="#011F26" textAlign="center" sx={{width: {xs: '75%', md: '90%'}}} fontWeight="bold" bgcolor="#E7D7C6" padding={0.5} paddingRight={3} paddingLeft={3} borderRadius={2} variant="h7">Olá, eu sou desenvolvedor web front-end!</Typography>
        </Box>
        <Paper sx={{ width: {xs: '75%', md: '50%'}, padding: 3, bgcolor: '#E7D7C6', display:'flex', flexDirection: 'column', borderRadius: 3, gap: 2 }} className={`profile-${mode}`}>
          <Typography color="primary" sx={{ textDecoration: "underline", textUnderlineOffset: 5, textDecorationThickness: 3}} fontWeight="bold" variant="h6" alignSelf="center">Sobre mim</Typography>
          <Typography textAlign="justify" variant='h7'  color="#011F26" >Eu me chamo Caio, tenho 19 anos e sou natural de Belo Horizonte/MG. Desde pequeno sempre gostei muito de criar e inventar coisas, creio que por isso eu goste tanto da area de programação, uma vez que ela me possibilita expressar minha imaginação e vontade de criação atraves dos codigos. Tenho como vontade e objetivo evoluir cada vez mais como um programador, criando e aprimorando codigos que possam impactar a vida  de pessoas da melhor forma possivel. Estou trilhando esse caminho!  </Typography>
        </Paper>
        <Paper sx={{ width: {xs: '75%', md: '50%'}, padding: 3, bgcolor: '#E7D7C6', display:'flex', flexDirection: 'column', borderRadius: 3, gap: 2}} className={`profile-${mode}`}>
          <Typography color="primary" sx={{ textDecoration: "underline", textUnderlineOffset: 5, textDecorationThickness: 3}} fontWeight="bold" variant="h6" alignSelf="center">Habilidades</Typography>
          {/* <Typography textAlign="justify" variant='h7'  color="#011F26" >
          </Typography> */}
          <List sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
            {
              habilidades.map((valor) => (
                <ListItem sx={{ display: 'flex', justifyContent: 'center' }} key={valor}>{valor}</ListItem>
              ))  
            }
          </List>
        </Paper>
        <Paper
          sx={{
            width: {xs: '75%', md: '50%'}, 
            padding: 3, 
            bgcolor: '#E7D7C6', 
            // display:'flex', 
            // flexDirection: 'column', 
            borderRadius: 3, 
            gap: 2, 
            mb: 5 
          }}
        >
          <Box
            display="flex"
            flexDirection="column"

          >
            <Typography
              color="textPrimary"
              sx={{ textDecoration: "underline", textUnderlineOffset: 5, textDecorationThickness: 3}}
              fontWeight="bold"
              variant="h6"
              alignSelf="center"
            >
              Formação
            </Typography>
            <Typography
              color="textPrimary"
              mt={3}
              textAlign="center"
              variant="h7"
            >
              Curso de Desenvolvimento Web - Trybe
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: {xs: 'column', md: 'row'} }} gap={5} mt={5}>
            {
              certificados.map((valor, i) => (
                <Link
                  href={ valor.link }
                  target='_blank'
                  display="flex"
                  justifyContent="center"
                  sx={{ width: { xs: '100%', md: '50%' } }}
                >
                  <Card sx={{ width: '70%' }}>
                    <CardMedia sx={{ height: 140 }} image={valor.imagem} />
                    <CardContent>
                      <Typography variant="h7">
                        {valor.texto}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              ) )
            }
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default Home;