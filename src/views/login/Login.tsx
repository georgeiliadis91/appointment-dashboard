import React from "react";
import Container from "@material-ui/core/Container";
import { useStyles } from "./login.style";
import { Avatar } from "../../components/ui-kit/avatar/avatar";
import { LockOutlinedIcon } from "../../components/ui-kit/icons/icons";
import { Typography } from "../../components/ui-kit/typography/typography";
import { TextField } from "../../components/ui-kit/textfield/textfield";
import { Button } from "../../components/ui-kit/button/button";
import { Grid } from "../../components/ui-kit/grid/grid";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { triggerSignIn } from "../../redux/user/actions";

type Inputs = {
  email: string;
  password: string;
};

export const Login = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { handleSubmit, control } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    dispatch(triggerSignIn("token"));
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            className={classes.textfields}
            as={TextField}
            name="email"
            type="email"
            control={control}
            variant="outlined"
            size="small"
            label="Email"
          />
          <Controller
            label="Password"
            className={classes.textfields}
            as={TextField}
            name="password"
            type="password"
            control={control}
            variant="outlined"
            size="small"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to={"/"}>Forgot password?</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
