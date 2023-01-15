import { Box, Card, CardActions, CardContent, CardMedia, styled, Typography } from "@mui/material";
import Header from "../componentes/Hearder";
import Wallet from '../images/Wallet.jpg';
import Trivia from '../images/Trivia.jpg';
import Receitas from '../images/Receitas.jpg';
import Portfolio from '../images/Portfolio.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../context/Context";

const LinkRedirect = styled('a')({});
const LinkPage = styled(Link)({})

function Projetos () {
  
    const {
      colorCard, 
      text
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
  ]

    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Header/>
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
          {
            projetos.map((valor) => (
              <Card key={valor.texto} sx={{ backgroundColor: colorCard, width: {xs: '100%', md: '40%'}}}>
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
                  <LinkRedirect sx={{ color: 'buttons.main' }} href={valor.linkGitHub} target="_blank">
                    <GitHubIcon/>
                  </LinkRedirect>
                  {
                    valor.texto === 'Portfólio' ? (
                      <LinkPage sx={{ color: 'buttons.main' }}  to={valor.linkSite}>
                        <OpenInBrowserIcon/>
                      </LinkPage>
                    ) : (
                      <LinkRedirect
                        sx={{ color: 'buttons.main' }} 
                        href={valor.linkSite} 
                        target="_blank"
                      >
                        <OpenInBrowserIcon/>
                      </LinkRedirect>
                    ) 
                  }
                </CardActions>
              </Card>
              ))
            }
        </Box>
      </Box>
    )
}

export default Projetos;