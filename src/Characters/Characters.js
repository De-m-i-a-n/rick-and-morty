import React, { useEffect, useState, setState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Filter1 from '../Filter/Filter1';
import Filter2 from '../Filter/Filter2';
import Filter3 from '../Filter/Filter3';
import Filter4 from '../Filter/Filter4';

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

  //const genderFilter = 'All';
  const genderFilter = useSelector(({ application }) => application.setSpeciesFilterType);
  console.log('my redux content before function:', genderFilter)
  //const filteredList = useSelector(({ application }) => application.setSpeciesFilterType);
  //useEffect(() => { console.log('genderFilter:', genderFilter) }, [genderFilter])

  const [data, setData] = useState({})

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(res => setData(res))
        //.then(res => console.log(res))
        //console.log('useeffect is working')
  }, [])
  //console.log('my object:', data)
  //console.log(data?.results)
/*
  genderFilter = useSelector(({ application }) => application.setSpeciesFilterType);
  useEffect(() => { console.log('genderFilter:', genderFilter) }, [genderFilter])
*/
  return (

/*    const currentTab = useSelector(({ application }) => application.activeTab)
    useEffect(() => { console.log('currentTab:', currentTab) }, [currentTab])
*/  
//.filter().filter().map
    <List dense sx={{ width: '800px', bgcolor: 'background.paper' }}>
      <div class="flex-container">
        <div className="name">Name</div>
          <div class="flex-container-filter">
          <div className="filter"><Filter1 /></div>
          <div className="filter"><Filter2 /></div>
          <div className="filter"><Filter3 /></div>
          <div className="filter"><Filter4 /></div>
        </div>
      </div>


      {data?.results?.filter(item => (
        genderFilter.indexOf('All') > -1 ? item :
        genderFilter === 'Human' ? item.species === genderFilter :
        genderFilter === 'Alien' ? item.species === genderFilter :
        genderFilter === 'Alive' ? item.status === genderFilter :
        genderFilter === 'Dead' ? item.status === genderFilter :
        genderFilter === 'unknown' ? item.status === genderFilter :
        genderFilter === 'Male' ? item.gender === genderFilter :
        item.gender === genderFilter)).map(value => {

      console.log('my genderFilter in function:', genderFilter)
        return (

          <ListItem>
            <div class="list-item">
              <div class="image"><Avatar src={value.image} /></div>
              <div class="name">{value.name}</div>
              <div>{value.species}</div>
              <div>{value.status}</div>
              <div>{value.gender}</div>
              <div>{value.smth}</div>
            </div>
          </ListItem>
        );
      })}
    </List>

  );
}