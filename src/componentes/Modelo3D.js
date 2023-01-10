import { Box } from "@mui/material";
import Spline from "@splinetool/react-spline";

function Modelo3D () {
    return (
      <Box mt={8} height="40vh"> 
        <Spline scene="https://prod.spline.design/7mAcYGRsPWhK3Tds/scene.splinecode"/>
       </Box>
    )
}
export default Modelo3D;