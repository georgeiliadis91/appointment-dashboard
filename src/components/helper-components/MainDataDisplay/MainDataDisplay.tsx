import classes from '*.module.css'
import React, {  ReactNode, useState } from 'react'
import { Container } from '../../ui-kit/container/container'
import { Fab } from '../../ui-kit/fab/fab'
import { AddIcon } from '../../ui-kit/icons/icons'
import { Paper } from '../../ui-kit/paper/paper'
import { Tooltip } from '../../ui-kit/tooltip/tooltip'
import { Typography } from '../../ui-kit/typography/typography'
import { useStyles } from './mainDataDisplay.style'

type DataDisplayProps = {
    addBtnTitle:string;
    children:ReactNode
}

export const MainDataDisplay = ({addBtnTitle,children}: DataDisplayProps) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <Container maxWidth={false}>
        <div className={classes.addBtnContainer}>
          <Typography variant="body1" className={classes.btnTitle}>{addBtnTitle}</Typography>
          <Tooltip title="Add" aria-label="add">
            <Fab color="secondary" onClick={handleClickOpen}>
              <AddIcon />
            </Fab>
          </Tooltip>
        </div>
        <Paper>
        {children}
        </Paper>
      </Container>
    )
}
