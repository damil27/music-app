import { AppBar, Toolbar, Typography } from "@mui/material";
import HeadsetMicTwoToneIcon from "@mui/icons-material/HeadsetMicTwoTone";
// import { makeStyles } from "@mui/styles";
import React from "react";

const Header = () => {
  return (
    <AppBar color="primary" position="fixed">
      <Toolbar>
        <HeadsetMicTwoToneIcon />
        <Typography style={{ marginLeft: "10px" }} component="h1" variant="h6">
          Music Share Application
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
