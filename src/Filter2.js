import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setActiveFilterType from './Store/actions/setActiveFilterType.js'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

export default function DialogSelect() {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState(0);
  const dispatch = useDispatch();
/*original const handleChange:

  const handleChange = (event) => {
    setType(Number(event.target.value) || '');
    dispatch(setActiveFilterType(Number));
  };
*/
  const handleChange = (event, newValue) => {
    setType(newValue);
    dispatch(setActiveFilterType(newValue));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Species{<UnfoldMoreIcon />}</Button>
      <Button onClick={handleClickOpen}>Status{<UnfoldMoreIcon />}</Button>
      <Button onClick={handleClickOpen}>Gender{<UnfoldMoreIcon />}</Button>      
       
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Filter characters</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 420 }}>
              <InputLabel htmlFor="demo-dialog-native">Filter by:</InputLabel>
              <Select
                native
                value={type}
                onChange={handleChange}
                input={<OutlinedInput label="Filter" id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={10}>Species</option>
                <option value={20}>Status</option>
                <option value={30}>Gender</option>
                <option value={30}>Cancel filtering, show all</option>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
