import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import strings from 'strings';

const texts = strings.sellers.edit.alertDialog;

type AlertDiealogProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const AlertDialog = ({ open, onClose, onConfirm }: AlertDiealogProps) => (
  <div>
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{texts.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {texts.contentText}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button aria-label={texts.buttons.cancel} onClick={onClose} autoFocus>
          {texts.buttons.cancel}
        </Button>
        <Button aria-label={texts.buttons.confirm} onClick={onConfirm}>
          {texts.buttons.confirm}
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

export default AlertDialog;
