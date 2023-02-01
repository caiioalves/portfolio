import { Box, Card, CardActions, CardContent, CardMedia, Slide, styled, Typography } from "@mui/material";
import Wallet from '../images/Wallet.png';
import Trivia from '../images/Trivia.png';
import Receitas from '../images/Receitas.png';
import Portfolio from '../images/Portfolio.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import Context from "../context/Context";

const LinkRedirect = styled('a')({});
const LinkPage = styled(Link)({})

function Projetos () {
  
    const {
      colorCard, 
      text,
      buttonMode, 
      setTransiçao,
      transiçao,
      colorTitle
    } = useContext(Context)

    
    const projetos = [
      {
        imagem: Wallet,
        texto: 'Controle de gastos | Full-Stack',
        linkGitHub: 'https://github.com/caiioalves/expense-control',
        linkSite: 'https://caio-expense-control.vercel.app'
      },
      {
        imagem: Trivia,
        texto: 'Jodo de Trivia | Front-end',
        linkGitHub: 'https://github.com/caiioalves/trivia-game',
        linkSite: 'https://caio-trivia.vercel.app/'
      },
      {
        imagem: Receitas,
        texto: 'App de Receitas | Front-end',
        linkGitHub: 'https://github.com/caiioalves/app-receitas',
        linkSite: 'https://caio-receitas.vercel.app/'
      },
      {
        imagem: Portfolio,
        texto: 'Portfólio | Front-end',
        linkGitHub: 'https://github.com/caiioalves/portfolio',
        linkSite: '/'  
      }
  ];

  useEffect(() => {
    setTransiçao(true)
  })

    return (
      <Slide appear={true} in={transiçao} direction="up" mountOnEnter unmountOnExit>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box sx={{ mt: {xs: -5, md: -1} }}>
          <Typography
            color={colorTitle}
            sx={{ textDecoration: "underline", textUnderlineOffset: 5, textDecorationThickness: 3}}
            alignSelf="flex-start"
            fontWeight="bold" 
            variant="h6"
          >
            Projetos
          </Typography>
        </Box>
        <Box 
          display="flex"
          justifyContent="center"
          alignItems="center" 
          flexWrap="wrap"
          sx={{ flexDirection: { xs: 'column', md: 'row' }, width: { xs: '75%', md: '60%' } }} 
          gap={4} 
          mt={5}
          mb={5}
        >
          {
            projetos.map((valor, i) => (
              <Card key={i} sx={{ backgroundColor: colorCard, width: {xs: '100%', md: '40%'}}}>
                <CardMedia
                  sx={{ height: 170 }}
                  image={valor.imagem}
                />
                <CardContent sx={{ display: 'flex', justifyContent: 'center', padding: 1}}>
                  <Typography color={text} variant="h7" textAlign="center">
                     {valor.texto}
                  </Typography>
                </CardContent>
                <CardActions sx={{padding: 1, display: 'flex', justifyContent: 'center', gap: 2}}>
                  <LinkRedirect href={valor.linkGitHub} target="_blank">
                    <GitHubIcon color={buttonMode}/>
                  </LinkRedirect>
                  {
                    valor.texto === 'Portfólio' ? (
                      <LinkPage to={valor.linkSite}>
                        <OpenInBrowserIcon color={buttonMode}/>
                      </LinkPage>
                    ) : (
                      <LinkRedirect
                        href={valor.linkSite} 
                        target="_blank"
                      >
                        <OpenInBrowserIcon color={buttonMode}/>
                      </LinkRedirect>
                    ) 
                  }
                </CardActions>
              </Card>
              ))
            }
        </Box>
      </Box>
      </Slide>
    )
}

export default Projetos;