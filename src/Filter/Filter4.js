import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setSpeciesFilterType from '../Store/actions/setSpeciesFilter.js';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Human',
  'Alien',
  'Male',
  'Female',
  'Alien',
  'Human',
  'unknown',
  'Dead',
  'Alive',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const dispatch = useDispatch();//new line

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    const myValue = setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    dispatch(setSpeciesFilterType(value));
    console.log(value)
  };

/*
  /////////////////////////////////////////////
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(setActiveTab(newValue));
  };

  return (
    <div class="header-flex-container">
      <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example"></Tabs>
      </div>)
  //////////////////////////////////////////////
*/

  return (
    <div>
      <FormControl sx={{ m: 1, width: 100 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
