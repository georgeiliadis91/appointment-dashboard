

import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { createStyles,  withStyles } from "../ui-kit/style/style";
import { TableCell, TableHead, TableRow } from "../ui-kit/table/table";



const StyledTableHead = withStyles((theme: Theme) =>
  createStyles({
    root: {
    
    },
  })
)(TableHead);

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    root: {
    
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
    
    },
  })
)(TableRow);


export {StyledTableCell,StyledTableRow,StyledTableHead}
