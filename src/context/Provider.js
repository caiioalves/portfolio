import { useState } from "react";
import Context from "./Context";

function Provider ({children}) {
    const [ mode, setMode ] = useState('light');
    const [ open, setOpen ] = useState(false);
    const [ text, setText ] = useState('textPrimary');
    const [colorH, setColorH ] = useState('primary.main');
    const [colorCard, setColorCard] = useState('#E7D7C6');
    const [iconButton, setIconButton] = useState('action');
    const [buttonMode, setButtonMode] = useState('buttonsLight');
    const [colorTf, setColorTf] = useState('#BF3604');
    const [transiçao, setTransiçao] = useState(true);
    const [colorTitle, setColorTitle] = useState('#BF3604');

    const state = {
      mode, setMode,
      open, setOpen,
      text, setText,
      colorH, setColorH,
      colorCard, setColorCard,
      iconButton, setIconButton,
      buttonMode, setButtonMode,
      colorTf, setColorTf,
      transiçao, setTransiçao,
      colorTitle, setColorTitle
    }

    return(
        <Context.Provider value={ state }>
            {children}
        </Context.Provider>
    )
}

export default Provider;