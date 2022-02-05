import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Item from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Zoom from "@mui/material/Zoom";
import FormControlLabel from "@mui/material/FormControlLabel";

import PokePackzLogo from "../Pokemon Images/PokePackzLogin.png";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Login() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Zoom in={true}>
      <div className="Login">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Card sx={{ minWidth: 400, margin: 5 }}>
            <CardContent>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <img
                  src={PokePackzLogo}
                  style={{
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    height: "65%",
                    width: "65%",
                    objectFit: "cover",
                  }}
                />
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-end"
                marginTop={2}
                marginBottom={2}
              >
                <Item>
                  <Tooltip title="Sign in with your Google account">
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={handleClick}
                    >
                      Connect with Google
                    </Button>
                  </Tooltip>
                </Item>
              </Grid>
              <Divider variant="middle" />
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
              >
                <Item>
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    type="email"
                  />
                </Item>
                <Item>
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    type="password"
                  />
                </Item>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Item>
                  <Checkbox defaultChecked />
                </Item>
                <Item>
                  <Typography variant="p" component="div">
                    Remember me
                  </Typography>
                </Item>
              </Grid>
            </CardContent>
            <CardActions>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-end"
                marginTop={3}
              >
                <Item>
                  <Tooltip title="Create a new account">
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={handleClick}
                      component={Link}
                      to={"/signup"}
                    >
                      Create Account
                    </Button>
                  </Tooltip>
                </Item>
                <Item>
                  <Tooltip title="Sign in">
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={handleClick}
                    >
                      Login
                    </Button>
                  </Tooltip>
                </Item>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
        <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            An error occured.
          </Alert>
        </Snackbar>
      </div>
    </Zoom>
  );
}

export default Login;
