import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100%",
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
    position: "relative",
  },
  profileUserId: {
    position: "absolute",
    right: theme.spacing(2),
    top: theme.spacing(2),
  },
  userProfilePicture: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    borderRadius: "50%",
  },
  profileDataContainer: {
    paddingTop: theme.spacing(2),
  },
  profileText: {
    marginBottom: theme.spacing(1),
  },
}));
