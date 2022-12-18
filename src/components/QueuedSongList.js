import { Delete } from "@mui/icons-material";
import { Avatar, IconButton, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import thumnailImage from "../image/Frame1.png";

const QueuedSongList = () => {
  const song = {
    title: "celebration",
    artist: "sandrom",
    thumnail: thumnailImage,
  };

  return (
    <div style={{ margin: "10px 0" }}>
      <Typography variant="button">QUEUE(5)</Typography>
      {Array.from({ length: 5 }, () => song).map((song, i) => (
        <QueueSong key={i} song={song} />
      ))}
    </div>
  );
};

function QueueSong({ song }) {
  const { title, artist, thumnail } = song;

  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    greaterThanMd && (
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gridTemplateColumns: "50px auto 50px",
          gridGap: 12,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Avatar
          style={{ width: 44, height: 44 }}
          src={thumnail}
          alt="source thumnail"
        />
        <div style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
          <Typography
            style={{ textOverflow: "ellipsis", overflow: "hidden" }}
            variant="subtitle2"
          >
            {title}
          </Typography>
          <Typography
            style={{ textOverflow: "ellipsis", overflow: "hidden" }}
            variant="body2"
          >
            {artist}
          </Typography>
        </div>
        <div>
          <IconButton>
            <Delete color="error" />
          </IconButton>
        </div>
      </div>
    )
  );
}
export default QueuedSongList;
