import { useState } from "react";
import Context from "./Context";

function Provider ({children}) {
    const [ mode, setMode ] = useState('light');
    const [ open, setOpen ] = useState(false);
    const [ text, setText ] = useState('textPrimary');
    const [colorH, setColorH ] = useState('primary.main');
    const [ colorCard, setColorCard ] = useState('#E7D7C6');
    // const [ buttonsTitles, setButtonsTitles ] =  useState('btLight')

    const state = {
      mode, setMode,
      open, setOpen,
      text, setText,
      colorH, setColorH,
      colorCard, setColorCard,
    //   buttonsTitles, setButtonsTitles
    }

    return(
        <Context.Provider value={ state }>
            {children}
        </Context.Provider>
    )
}

export default Provider;