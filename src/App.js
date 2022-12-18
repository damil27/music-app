import React from "react";
import Header from "./components/Header";
import AddSong from "./components/AddSong";
import SongList from "./components/SongList";
import SongPlayer from "./components/SongPlayer";
import { Grid, Hidden, useMediaQuery } from "@mui/material";

function App() {
  const greaterThanSM = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <>
      <Hidden only="xs">
        <Header />
      </Hidden>
      <Grid container spacing={2}>
        <Grid style={{ padding: greaterThanSM ? 80 : 10 }} item sm={12} md={7}>
          <AddSong />
          <SongList />
        </Grid>
        <Grid
          style={
            greaterThanMd
              ? { top: "70px", position: "fixed", right: 0, width: "100%" }
              : {
                  position: "fixed",
                  width: "100%",
                  left: 0,
                  bottom: 0,
                }
          }
          item
          sm={12}
          md={5}
        >
          <SongPlayer />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
