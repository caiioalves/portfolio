import { Box, Button, styled, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Header from "../componentes/Hearder";
import Context from "../context/Context";
import emailjs from '@emailjs/browser';

const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: "#BF3604",
    },
    '&:hover fieldset': {
      borderColor: "#BF3604",
    },
    '&.Mui-focused fieldset': {
      borderColor: "#BF3604",
    },
  }
});


function Contato () {
  
  const {
    mode, text
  } = useContext(Context);
  
  const [colorLabel, setColorLabel] = useState('black');
  const [assunto, setAssunto] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [colorInput ,setColorInput] = useState('primary');
  
  useEffect(() => {
    // console.log('teste');
    if(mode === 'dark') {
      setColorLabel('white');
      setColorInput('primary');
    } else {
      setColorLabel('black');
      setColorInput('secondary');
    }
  }, [mode])

  useEffect(() => {
    if(assunto.length > 0 && nome.length > 0 && email.length > 0 && message.length > 0 ) {
      setDisabled(false)
    } else { setDisabled(true) }
  }, [assunto, nome, email, message])

  const handleClick = () => {
    emailjs.send("gmailMessage","template_amt1hhh",{
      subject: assunto,
      name: nome,
      email: email,
      message: message,
      }, 'pIpYveEc25BHfHn98');
      setAssunto('');
      setNome('');
      setEmail('');
      setMessage('');
  };

    return (
      <Box height="100vh" display="flex" justifyContent="center" alignItems="center" sx={{ mt: {xs: -30, md: -10} }}>
        <Header/>
        <Box width="100%" display="flex" flexDirection="column" alignItems="center" gap={3} >
          <Typography
            variant="h6" 
            color={text}
            sx={{ textDecoration: "underline", textUnderlineOffset: 5, textDecorationThickness: 3, mb: 3}}
            fontWeight="bold"
          >
            Formulário de contato
          </Typography>
            <CssTextField
              sx={{ width: {xs: '80%', md: '30%'}}}
              size="small"
              inputProps={{ style: {color: colorLabel} }}
              InputLabelProps={{ style: {color: colorLabel} }}
              value={ assunto }
              onChange={(e) => {setAssunto(e.target.value)}}
              label="Assunto"
              color={colorInput}
            />
            <CssTextField
              sx={{ width: {xs: '80%', md: '30%'} }}
              size="small"
              inputProps={{ style: {color: colorLabel} }}
              InputLabelProps={{ style: {color: colorLabel} }}
              value={ nome }
              onChange={(e) => {setNome(e.target.value)}}
              label="Nome"
              color={colorInput}
            />
            <CssTextField          
              sx={{ width: {xs: '80%', md: '30%'} }}
              size="small"
              inputProps={{ style: {color: colorLabel} }}
              InputLabelProps={{ style: {color: colorLabel} }}
              value={ email }
              onChange={(e) => {setEmail(e.target.value)}}
              label="Email"
              color={colorInput}
            />
            <CssTextField
              sx={{ width: {xs: '80%', md: '30%'}}}
              size="small"
              inputProps={{ style: {color: colorLabel} }}
              InputLabelProps={{ style: {color: colorLabel} }}
              value={ message }
              onChange={(e) => {setMessage(e.target.value)}}
              label="Message"
              color={colorInput}
              // color="warning"
              multiline
              rows={6}
            />
            <Button
              sx={{ fontWeight: 'bold' }}
              disabled={disabled}
              color="buttons"
              variant="contained"
              onClick={handleClick}
            >
              Enviar
            </Button>
             {/* <FormHelperText sx={{color: 'red'}}>
               {
                assunto.length < 5 ? 'O input deve ter mais de 5 caracteres' : undefined
               }
             </FormHelperText> */}
        </Box>
      </Box>
    )
}

export default Contato;