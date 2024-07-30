import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useApp } from "../ThemedApp";
import { useNavigate } from "react-router-dom";

function Login() {
  const { setAuth } = useApp();
  const navigate = useNavigate();
  function handelSubmit(e) {
    e.preventDefault();
    setAuth(true);
    navigate("/");
  }
  return (
    <Box>
      <Typography variant="h3">Login</Typography>
      <Alert severity="warning" sx={{ mt: 2 }}>
        All fields require
      </Alert>
      <form onSubmit={(e) => handelSubmit(e)}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2 }}>
          <TextField placeholder="Username" fullWidth />
          <TextField placeholder="password" fullWidth />

          <Button type="submit" variant="contained">
            Login
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Login;
