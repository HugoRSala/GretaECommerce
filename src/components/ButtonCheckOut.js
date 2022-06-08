import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const ButtonCheckOut = () => {
    return (
        <Link to='/cart'><Button variant="contained" color="error">CheckOut</Button></Link>
    )
}

export default ButtonCheckOut
