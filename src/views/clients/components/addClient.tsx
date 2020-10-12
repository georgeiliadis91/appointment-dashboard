import { CircularProgress } from "@material-ui/core";
import Button from "@material-ui/core/Button/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField/TextField";
import Typography from "@material-ui/core/Typography/Typography";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { addClient } from "../../../services/clientApi";

const useStyles = makeStyles((theme) => ({
  modalTitle: {
    textAlign: "center",
    padding: theme.spacing(2, 0),
  },
  actionBtns: {
    margin: theme.spacing(3, 0, 1, 0),
  },
}));

interface Props {
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  handleClose: () => void;
  open: boolean;
}

export const AddClient = ({ handleClose, open, setErrorMessage }: Props) => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    // alert(JSON.stringify(data));

    const { name, phone, email, address } = data;
    setLoading(true);
    try {
      await addClient({ name, phone, email, address });
    } catch (error) {
      setErrorMessage(error);
    }
    setLoading(false);
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <Typography variant="h3" className={classes.modalTitle}>
            Add New Client
          </Typography>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="outlined"
              margin="normal"
              inputRef={register}
              required
              fullWidth
              id="name"
              label="Name Surname"
              name="name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              type="tel"
              inputRef={register}
              required
              fullWidth
              id="phone"
              label="Phone"
              name="phone"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              inputRef={register}
              required
              type="email"
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              inputRef={register}
              required
              fullWidth
              id="address"
              label="Address"
              name="address"
              autoFocus
            />

            <DialogActions className={classes.actionBtns}>
              <Button color="primary" variant="contained" type="submit">
                {loading ? <CircularProgress /> : "Submit"}
              </Button>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
