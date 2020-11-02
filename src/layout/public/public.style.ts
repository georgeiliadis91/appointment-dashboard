import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },

    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);
