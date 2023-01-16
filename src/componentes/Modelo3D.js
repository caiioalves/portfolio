import { Box, CircularProgress } from "@mui/material";
import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";

function Modelo3D () {

  const [carregando, setCarregando] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCarregando(false);
  //   }, 3000)
  // })

  const onLoad = () => {
    setCarregando(false);
  }

    return (
      <Box display="flex" justifyContent="center" alignItems="center" mt={8} height="40vh">
        { carregando === true && (<CircularProgress color="secondary" />)}
        <Spline scene="https://prod.spline.design/7mAcYGRsPWhK3Tds/scene.splinecode" onLoad={onLoad}/>
       </Box>
    )
}
export default Modelo3D;