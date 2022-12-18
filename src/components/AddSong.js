import {
  InputAdornment,
  Link,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import React from "react";
import { AddBoxOutlined } from "@mui/icons-material";
import Ellipse from "../image/Ellipse2.png";

const AddSong = () => {
  const [dialog, setDailog] = React.useState(false);

  function handleCloseDailog() {
    setDailog(false);
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Dialog
        open={dialog}
        onClose={handleCloseDailog}
        style={{ textAlign: "center" }}
      >
        <DialogTitle>Edit Song</DialogTitle>
        <DialogContent>
          <img src={Ellipse} alt="song thumbnail" style={{ width: "50%" }} />
          <TextField margin="dense" name="title" label="Title" fullWidth />
          <TextField margin="dense" name="artist" label="Artist" fullWidth />
          <TextField
            margin="dense"
            name="thumbnail"
            label="Thumbnail"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDailog} color="primary">
            Cancel
          </Button>
          <Button variant="outlined" color="primary">
            Add Song
          </Button>
        </DialogActions>
      </Dialog>
      <TextField
        placeholder="Add youtube Link"
        fullWidth
        margin="normal"
        type="url"
        InputProps={
          <InputAdornment position="start">
            <LinkOutlinedIcon />
          </InputAdornment>
        }
      />
      <Button
        onClick={() => setDailog(true)}
        endIcon={<AddBoxOutlined />}
        color="primary"
        variant="contained"
      >
        Add
      </Button>
    </div>
  );
};

export default AddSong;
