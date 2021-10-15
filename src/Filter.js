import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log('some text')
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 20 }}>
        <InputLabel id="demo-simple-select-standard-label">Species</InputLabel>
        <InputLabel id="demo-simple-select-standard-label">Status</InputLabel>
        <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Filter"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>species</MenuItem>
          <MenuItem value={20}>status</MenuItem>
          <MenuItem value={30}>gender</MenuItem>
          
        </Select>
      </FormControl>
    </div>
  );
}   
// species, status, gender