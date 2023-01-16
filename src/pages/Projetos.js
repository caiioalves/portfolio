import { Box, Card, CardActions, CardContent, CardMedia, styled, Typography } from "@mui/material";
import Wallet from '../images/Wallet.jpg';
import Trivia from '../images/Trivia.jpg';
import Receitas from '../images/Receitas.jpg';
import Portfolio from '../images/Portfolio.jpg';
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
      setTransiçao
    } = useContext(Context)

    const projetos = [
      {
        imagem: Wallet,
        texto: 'Wallet',
        linkGitHub: 'https://github.com/caiioalves/wallet',
        linkSite: 'https://caio-wallet.netlify.app/'
      },
      {
        imagem: Trivia,
        texto: 'Jodo de Trivia',
        linkGitHub: 'https://github.com/caiioalves/trivia-game',
        linkSite: 'https://caio-trivia.vercel.app/'
      },
      {
        imagem: Receitas,
        texto: 'App de Receitas',
        linkGitHub: 'https://github.com/caiioalves/app-receitas',
        linkSite: 'https://caio-receitas.vercel.app/'
      },
      {
        imagem: Portfolio,
        texto: 'Portfólio',
        linkGitHub: 'https://github.com/caiioalves/portfolio',
        linkSite: '/'  
      }
  ];

  useEffect(() => {
    setTransiçao(true)
  })

    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box sx={{ mt: {xs: -5, md: -1} }}>
          <Typography
            color={text}
            sx={{
              bgcolor: colorCard, 
              padding: 0.5,
              paddingLeft: 3, 
              paddingRight: 3, 
              borderRadius: 2 
            }} 
            fontWeight="bold" 
            variant="h7"
          >
            Projetos
          </Typography>
        </Box>
        <Box 
          display="flex"
          justifyContent="center"
          alignItems="center" 
          flexWrap="wrap"
          sx={{ flexDirection: { xs: 'column', md: 'row' }, width: '50%' }} 
          gap={4} 
          mt={5}
          mb={5}
        >
          {/* {
            projetos.map((valor, i) => (
              <Card key={i} sx={{ backgroundColor: colorCard, width: {xs: '100%', md: '40%'}}}>
                <CardMedia
                  sx={{ height: 120 }}
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
            } */}
            <Card sx={{ backgroundColor: colorCard, width: {xs: '100%', md: '40%'}}}>
                <CardMedia
                  sx={{ height: 120 }}
                  image={Wallet}
                />
                <CardContent sx={{ display: 'flex', justifyContent: 'center', padding: 1}}>
                  <Typography color={text} variant="h7" textAlign="center">
                  Wallet
                  </Typography>
                </CardContent>
                <CardActions sx={{padding: 1, display: 'flex', justifyContent: 'center', gap: 2}}>
                  <LinkRedirect href="https://github.com/caiioalves/wallet" target="_blank">
                    <GitHubIcon color={buttonMode}/>
                  </LinkRedirect>
                      <LinkRedirect
                        href="https://caio-wallet.netlify.app/" 
                        target="_blank"
                      >
                        <OpenInBrowserIcon color={buttonMode}/>
                      </LinkRedirect>
                </CardActions>
              </Card>
              <Card sx={{ backgroundColor: colorCard, width: {xs: '100%', md: '40%'}}}>
                <CardMedia
                  sx={{ height: 120 }}
                  image={Trivia}
                />
                <CardContent sx={{ display: 'flex', justifyContent: 'center', padding: 1}}>
                  <Typography color={text} variant="h7" textAlign="center">
                    Jogo de Trivia
                  </Typography>
                </CardContent>
                <CardActions sx={{padding: 1, display: 'flex', justifyContent: 'center', gap: 2}}>
                  <LinkRedirect href="https://github.com/caiioalves/trivia-game" target="_blank">
                    <GitHubIcon color={buttonMode}/>
                  </LinkRedirect>
                      <LinkRedirect
                        href="https://caio-trivia.vercel.app/" 
                        target="_blank"
                      >
                        <OpenInBrowserIcon color={buttonMode}/>
                      </LinkRedirect>
                </CardActions>
              </Card>
              <Card sx={{ backgroundColor: colorCard, width: {xs: '100%', md: '40%'}}}>
                <CardMedia
                  sx={{ height: 120 }}
                  image={Receitas}
                />
                <CardContent sx={{ display: 'flex', justifyContent: 'center', padding: 1}}>
                  <Typography color={text} variant="h7" textAlign="center">
                    App de Receitas
                  </Typography>
                </CardContent>
                <CardActions sx={{padding: 1, display: 'flex', justifyContent: 'center', gap: 2}}>
                  <LinkRedirect href="https://github.com/caiioalves/app-receitas" target="_blank">
                    <GitHubIcon color={buttonMode}/>
                  </LinkRedirect>
                      <LinkRedirect
                        href="https://caio-receitas.vercel.app/" 
                        target="_blank"
                      >
                        <OpenInBrowserIcon color={buttonMode}/>
                      </LinkRedirect>
                </CardActions>
              </Card>
              <Card sx={{ backgroundColor: colorCard, width: {xs: '100%', md: '40%'}}}>
                <CardMedia
                  sx={{ height: 120 }}
                  image={Receitas}
                />
                <CardContent sx={{ display: 'flex', justifyContent: 'center', padding: 1}}>
                  <Typography color={text} variant="h7" textAlign="center">
                    Portifólio
                  </Typography>
                </CardContent>
                <CardActions sx={{padding: 1, display: 'flex', justifyContent: 'center', gap: 2}}>
                  <LinkRedirect href="https://github.com/caiioalves/portfolio" target="_blank">
                    <GitHubIcon color={buttonMode}/>
                  </LinkRedirect>
                      <LinkPage to="/">
                        <OpenInBrowserIcon color={buttonMode}/>
                      </LinkPage>
                </CardActions>
              </Card>
        </Box>
      </Box>
    )
}

export default Projetos;