import { PlayArrow, SkipNext, SkipPrevious } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Slider,
  Typography,
} from "@mui/material";
import React from "react";
import QueuedSongList from "./QueuedSongList";
import Ellipse from "../image/Ellipse2.png";

const SongPlayer = () => {
  return (
    <div>
      <Card
        variant="outlined"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0 15px",
          }}
        >
          <CardContent style={{ flex: "1 0 auto" }}>
            <Typography variant="h5" component="h3">
              Title
            </Typography>
            <Typography variant="subtitle1" component="p">
              Artist
            </Typography>
          </CardContent>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <IconButton>
              <SkipPrevious />
            </IconButton>
            <IconButton>
              <PlayArrow style={{ width: 38, height: 38 }} />
            </IconButton>
            <IconButton>
              <SkipNext />
            </IconButton>
            <Typography variant="subtitle1" component="p">
              00:02:30
            </Typography>
          </div>
          <Slider min={0} max={1} step={0.01} type="range" />
        </div>
        <CardMedia style={{ width: "150px" }} image={Ellipse} />
      </Card>
      <QueuedSongList />
    </div>
  );
};

export default SongPlayer;
