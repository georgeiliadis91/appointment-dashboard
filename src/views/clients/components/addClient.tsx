import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/ui-kit/button/button";
import { CircularProgress } from "../../../components/ui-kit/circular-progress/circulartprogress";
import {
  DialogActions,
  DialogContent,
} from "../../../components/ui-kit/dialog/dialog";
import { TextField } from "../../../components/ui-kit/textfield/textfield";
import { Typography } from "../../../components/ui-kit/typography/typography";
import { addClient } from "../../../services/clientApi";

const useStyles = makeStyles((theme: Theme) => ({
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
