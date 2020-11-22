import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
    addBtnContainer: {
    display:"flex",
    alignItems:"center",
    justifyContent:"flex-end",
    padding:theme.spacing(0,2),
    marginBottom:theme.spacing(2)
  },
  btnTitle:{
      marginRight:theme.spacing(1)
  }
}));
