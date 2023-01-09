import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Link, Typography } from "@mui/material";
import Header from "../componentes/Hearder";
import Wallet from '../images/Wallet.jpg';
import Trivia from '../images/Trivia.jpg';
import Receitas from '../images/Receitas.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

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
    }
]

function Projetos () {
    return (
      <Box>
        <Header/>
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ flexDirection: { xs: 'column', md: 'row' } }} gap={4} mt={10}>
          {
            projetos.map((valor) => (
              <Card sx={{ backgroundColor: '#E7D7C6', width: {xs: '50%', md: '20%'}}}>
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
                  {/* <IconButton> */}
                    <Link href={valor.linkGitHub} target="_blank">
                      <GitHubIcon/>
                    </Link>
                  {/* </IconButton> */}
                  {/* <IconButton> */}
                    <Link href={valor.linkSite} target="_blank">
                    <OpenInBrowserIcon/>
                    </Link>
                  {/* </IconButton> */}
                </CardActions>
              </Card>
              ))
            }
        </Box>
      </Box>
    )
}

export default Projetos;