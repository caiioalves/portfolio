import { Box, Card, CardActions, CardContent, CardMedia, styled, Typography } from "@mui/material";
import Header from "../componentes/Hearder";
import Wallet from '../images/Wallet.jpg';
import Trivia from '../images/Trivia.jpg';
import Receitas from '../images/Receitas.jpg';
import Portfolio from '../images/Portfolio.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import { Link } from "react-router-dom";

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

const LinkRedirect = styled('a')({ color: 'black' });
const LinkPage = styled(Link)({ color: 'black' })

function Projetos () {

    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Header/>
        <Box mt={15}>
          <Typography color="textPrimary" sx={{ bgcolor: '#E7D7C6', padding: 0.5 ,paddingLeft: 3, paddingRight: 3, borderRadius: 2 }} fontWeight="bold" variant="h7">
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
              <Card key={valor.texto} sx={{ backgroundColor: '#E7D7C6', width: {xs: '100%', md: '40%'}}}>
                <CardMedia
                  sx={{ height: 120 }}
                  image={valor.imagem}
                />
                <CardContent sx={{ display: 'flex', justifyContent: 'center', padding: 1}}>
                  <Typography variant="h7" textAlign="center">
                     {valor.texto}
                  </Typography>
                </CardContent>
                <CardActions sx={{padding: 1, display: 'flex', justifyContent: 'center', gap: 2}}>
                  <LinkRedirect href={valor.linkGitHub} target="_blank">
                    <GitHubIcon/>
                  </LinkRedirect>
                  {
                    valor.texto === 'Portfólio' ? (
                      <LinkPage to={valor.linkSite}>
                        <OpenInBrowserIcon/>
                      </LinkPage>
                    ) : (
                      <LinkRedirect 
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