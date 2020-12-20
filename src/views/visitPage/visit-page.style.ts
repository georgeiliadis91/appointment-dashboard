import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    position: "relative",
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  visitId: {
    position: "absolute",
    right: theme.spacing(2),
    top: theme.spacing(2),
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(3),
  },
  clientName: {},
  visitDate: {
    fontSize: 13,
    fontWeight: 300,
    marginBottom: theme.spacing(1),
  },
  descriptionText: {
    fontSize: 15,
    marginTop: theme.spacing(2),
  },
  chargesText: {
    fontWeight: 700,
  },
  updateDate: {
    textAlign: "right",
    marginTop: theme.spacing(3),
  },
}));
