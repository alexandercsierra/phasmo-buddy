import React, {useState} from 'react'
import { objectives } from '../constants'
import { Dialog, DialogTitle } from '@material-ui/core'

const GenericDialog = ({children, title, open, handleClose}) => {

    return(
        <div>
            <Dialog open={open} PaperProps={{ className: "objectiveDialog", style: {margin: '0'}}}>
                <DialogTitle style={{color: 'white'}}>
                    <i className="fas fa-times" style={{float:'right', cursor: 'pointer', color: "#961210"}} onClick={handleClose}></i>
                    <div className="centered">
                    <h3>{title}</h3>
                    </div>
                </DialogTitle>
                {children}
            </Dialog>
        </div>
    )
}

export default GenericDialog