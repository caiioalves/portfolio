import { useState } from "react";
import Context from "./Context";

function Provider ({children}) {
    const [ mode, setMode ] = useState('light');
    const [ open, setOpen ] = useState(false);


    const state = {
      mode, setMode,
      open, setOpen
    }

    return(
        <Context.Provider value={ state }>
            {children}
        </Context.Provider>
    )
}

export default Provider;