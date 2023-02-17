import React from 'react';
import dialogStyles from 'Credo_Dialog.module.scss'
import {Dialog, DialogTitle, InputLabel} from "@mui/material";

const CredoDialog = (props:any) => {
    const open: boolean = false;
    const credentials = props.credo.map((item:any)=>{
        return (
            <InputLabel>{item}</InputLabel>
        )
    });
    return (
        <div>
            <Dialog
            open = {open}>
<DialogTitle>{props.title}</DialogTitle>
                {credentials}
            </Dialog>
        </div>
    );
};

export default CredoDialog;
