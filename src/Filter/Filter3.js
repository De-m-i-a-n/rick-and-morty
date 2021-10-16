import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setGenderFilterType from '../Store/actions/setGenderFilter.js';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import './Filter3.css'

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(setGenderFilterType(newValue));
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        value={value} 
        onChange={handleChange}
      >
        Gender <UnfoldMoreIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Male</MenuItem>
        <MenuItem onClick={handleClose}>Female</MenuItem>
        <MenuItem onClick={handleClose}>unknown</MenuItem>
      </Menu>
    </div>
  );
}
