import React, {  ReactNode, useState } from 'react'
import { Container } from '../ui-kit/container/container'
import { Fab } from '../ui-kit/fab/fab'
import { AddIcon } from '../ui-kit/icons/icons'
import { Paper } from '../ui-kit/paper/paper'
import { Tooltip } from '../ui-kit/tooltip/tooltip'
import { Typography } from '../ui-kit/typography/typography'

interface Props {
    addBtnTitle:string;
   
    children:ReactNode
}

export const MainDataDisplay = ({addBtnTitle,children}: Props) => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    
    return (
        <Container maxWidth={false}>
        <div>
          <Typography variant="body1">{addBtnTitle}</Typography>
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
