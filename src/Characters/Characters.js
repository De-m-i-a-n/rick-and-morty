//import * as React from 'react';
import React, { useEffect, useState, setState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Filter from '../Filter';
import './Characters.css';

export default function CheckboxListSecondary() {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [data, setData] = useState({})

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(res => setData(res))
        //.then(res => console.log(res))
        //console.log('useeffect is working')        
  }, [])
  console.log('my object:', data)
  console.log(data?.results)
  return (    
    
    <List dense sx={{ width: '800px', bgcolor: 'background.paper' }}>
      <div class="flex-container">
        <div>Name</div>
        <div>Species</div>
        <div>Status</div>
        <div>Gender</div>

        <div className="Filter"><Filter /></div>

      </div>
      {data?.results?.map(value => {

        return (
                    
          <ListItem>
            <div class="list-item">             
              <div class="img"><Avatar src={value.image} /></div>            
              <span>{value.name}</span>              
              <div>{value.species}</div>              
              <div>{value.status}</div>              
              <div>{value.gender}</div>
            </div> 
          </ListItem>
          
        );
      })}
    </List>
    
  );
}
// species, status, gender