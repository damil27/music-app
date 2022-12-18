import { PlayArrow, Save } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import thumnailImage from "../image/Frame1.png";

const SongList = () => {
  let loading = false;
  const song = {
    title: "celebration",
    artist: "sandrom",
    thumnail: thumnailImage,
  };
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <CircularProgress />
      </div>
    );
  }
  return (
    <div>
      {Array.from({ length: 10 }, () => song).map((song, i) => (
        <Song key={i} song={song} />
      ))}
    </div>
  );
};

function Song({ song }) {
  const { title, artist, thumnail } = song;
  return (
    <Card style={{ margin: "13px" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
        }}
      >
        <CardMedia
          image={thumnail}
          style={{ objectFit: "cover", width: 140, height: 140 }}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {artist}
            </Typography>
            <Typography gutterBottom variant="body1" component="p">
              {title}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton>
              <PlayArrow />
            </IconButton>
            <IconButton>
              <Save />
            </IconButton>
          </CardActions>
        </div>
      </div>
    </Card>
  );
}
export default SongList;
