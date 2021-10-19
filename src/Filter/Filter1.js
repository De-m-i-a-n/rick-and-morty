import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setSpeciesFilterType from '../Store/actions/setSpeciesFilter.js';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import './Filter1.css'

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [value, setValue] = React.useState([]);//new line
  const dispatch = useDispatch();//new line

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (value) => {
    setAnchorEl(null);
    setValue(value);
    console.log('my dispatch check:', value)//new line
    dispatch(setSpeciesFilterType(value));//new line
    
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
      >
        Species <UnfoldMoreIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        value={value}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          aria-label="Human" 
          value='Human' //new line
          onClick={() => dispatch(value)}>
            Human
        </MenuItem>

        <MenuItem
          aria-label="Alien" 
          value='Alien' //new line
          onClick={() => dispatch(value)}>
            Alien
        </MenuItem>
      </Menu>
    </div>
  );
}
