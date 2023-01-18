import imgProfile  from '../images/caio.jpg';
import certificadoFrontEnd  from '../images/certificadoFrontEnd.PNG';
import certificadoFundamentos  from '../images/certificadoFundamentos.PNG';
import '../App.css';
import { useContext, useEffect } from 'react';
import { Avatar, Box, Card, CardContent, CardMedia, Link, List, ListItem, Slide, Typography } from '@mui/material';
import Context from '../context/Context';

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

  const { text, transiçao ,setTransiçao, colorTitle} = useContext(Context);

  const habilidades = ['Html', 'CSS', 'JavaScript', 'Testes Unitários','React', 'Redux', 'Context API', 'Hooks',
  'Material UI' ,'React Testing Library', 'MySQL', 'Docker', 'Node.js', 'Express', 'Api Rest', 'Git', 'GitHub',
  'Terminal Linux' ];

  useEffect(() => {
    setTransiçao(true)
  })
    
  return (
    <Box
      height="100vh"
    >
      <Slide appear={true} in={transiçao} direction="up" mountOnEnter unmountOnExit>
      <Box sx={{ mt: {xs: -5, md: -3} }} display="flex" alignItems="center" flexDirection="column">
        <Box gap={2} sx={{ width: {xs: '75%', md: '50%'}, padding: 3, display:'flex', flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'center', alignItems: 'center', borderRadius: 3 }}>
          <Typography 
            color="textSecondary" 
            textAlign="center" 
            sx={{width: {xs: '100%', md: '65%'}}} 
            fontWeight="bold"  
            padding={1} 
            borderRadius={2} 
            variant="h7"
            bgcolor={colorTitle}
          >
            Olá, eu sou desenvolvedor web front-end!
          </Typography>
          <Avatar sx={{ width: 90, height: 90, border: '3px solid whitesmoke' }} src={ imgProfile } alt='' />
        </Box>
        <Box 
          sx={{ width: {xs: '75%', md: '50%'}, 
          padding: 3, 
          display:'flex', 
          flexDirection: 'column', 
          borderRadius: 3, 
          gap: 2 }}
        >
          <Typography 
            color={colorTitle}
            sx={{ textDecoration: "underline", 
            textUnderlineOffset: 5, textDecorationThickness: 3}} 
            fontWeight="bold" 
            variant="h6" 
            alignSelf="flex-start"
          >
            Sobre mim
          </Typography>
          <Typography textAlign="justify" variant='h7'  color={text} >
          Meu nome é Caio Alexandre, tenho  20 anos de idade, e sou natural de Belo Horizonte/MG. Na minha infância,
          sempre apresentei interesse em criar, inventar e reinventar diferentes objetos. Esse meu entusiasmo se 
          desenvolveu, e hoje aplico as minhas habilidades no área da tecnologia, mais especificamente na programação. 
          Já que por meio dela, consigo expressar minha imaginação e vontade na síntese de diversos códigos. O meu 
          principal objetivo é evoluir cada vez mais como programador, criando e aprimorando códigos que possam impactar 
          a vida de pessoas da melhor forma possível. Sendo assim, estou trilhando esse caminho!
          </Typography>
        </Box>
        <Box 
          sx={{ 
            width: {xs: '75%', md: '50%'}, 
            padding: 3, 
            display:'flex', 
            flexDirection: 'column', 
            borderRadius: 3, 
            // gap: 1
          }} 
        >
          <Typography 
            color={colorTitle} 
            sx={{ 
              textDecoration: "underline", 
              textUnderlineOffset: 5, 
              textDecorationThickness: 3
            }} 
            fontWeight="bold" 
            variant="h6" 
            alignSelf="flex-start"
          >
            Habilidades
          </Typography>
          <List sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, flexWrap: 'wrap', justifyContent: 'flex-start'}}>
            {
              habilidades.map((valor, i) => (
                <ListItem sx={{ display: 'flex', justifyContent: 'flex-start', width: {xs: '100%', md: '50%'}, }} key={i}>
                  <Typography variant='h7' color={text}>
                     {`- ${valor}`}
                  </Typography>
                </ListItem>
              ))  
            }
          </List>
        </Box>
        <Box
          sx={{
            width: {xs: '75%', md: '50%'}, 
            padding: 3, 
            display:'flex', 
            justifyContent: 'flex-start',
            borderRadius: 3, 
            gap: 2, 
            mb: 5 
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            width="100%"
          >
            <Typography
              color={colorTitle}
              sx={{ textDecoration: "underline", textUnderlineOffset: 5, textDecorationThickness: 3}}
              fontWeight="bold"
              variant="h6"
              alignSelf="flex-start"
            >
              Formação
            </Typography>
            <Typography
              color={text}
              mt={3}
              textAlign="flex-start"
              variant="h7"
            >
              Curso de Desenvolvimento Web - Trybe
            </Typography>
            <Box 
              sx={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "flex-start", 
                flexDirection: {xs: 'column', md: 'row'} }} 
              gap={5} 
              mt={5}
              width="100%"
            >
            {
              certificados.map((valor, i) => (
                <Link
                  key={i}
                  href={ valor.link }
                  target='_blank'
                  display="flex"
                  justifyContent="flex-start"
                  sx={{ width: { xs: '100%', md: '50%' }, textDecoration: 'none' }}
                >
                  <Card sx={{ width: '70%' }}>
                    <CardMedia sx={{ height: 140 }} image={valor.imagem} />
                    <CardContent>
                      <Typography variant="h7" fontWeight="bold" >
                        {valor.texto}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              ) )
            }
            </Box>
          </Box>
        </Box>
      </Box>
      </Slide>
    </Box>
  );
}

export default Home;