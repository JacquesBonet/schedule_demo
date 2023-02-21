
import React from 'react';
import {Alert, AlertColor, Paper, Slide, Snackbar} from "@mui/material";

/**
 * Display a popup messagebox on the bottom
 *
 * @param ({severity, value}) msg   the error msg. Contains attributes severity and value. value is null if no message
 * @param {boolean}             open  say if open the msg box. If not specified, msgBox open if msg !== undefined
 * @returns {JSX.Element}
 */

export type MsgType = {
  severity: AlertColor,
  value: string | null,
};

interface Props {
  msg: MsgType,
  onClose: () => void
  open: boolean
}
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const MessageBox = ({ msg, onClose = () => {}, open = true }: Props) => (
  <Snackbar
    open={open}
    TransitionComponent={TransitionUp}
    autoHideDuration={4000}
    onClose={onClose}
    aria-label="MessageBox"
  >
    <Paper elevation={3}>
      <Alert
        severity={msg?.severity}
        icon={false}
        aria-label="alert"
      >
        {msg?.value}
      </Alert>
    </Paper>
  </Snackbar>
);

function TransitionUp(props: any) {
  return <Slide {...props} direction="up" timeout={1000} />;
}

