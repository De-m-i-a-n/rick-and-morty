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
  const genderFilter = useSelector(({ application }) => application.activeFilter);
  console.log('my redux content before function:', genderFilter)
  //const filteredList = useSelector(({ application }) => application.setSpeciesFilterType);
  //useEffect(() => { console.log('genderFilter:', genderFilter) }, [genderFilter])
/*
  // старая функция
  const [data, setData] = useState({})
  const [result, setResult] = useState({})
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(res => setData(res))
        .then(result => setResult(result))
        //.then(res => console.log(res))
        //console.log('useeffect is working')
  }, [])
*/

// Новая функция с переменной в которую передается обьект из fetch
  const [data, setData] = useState({})
  const [result, setResult] = useState(data)
  
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(res => {
         setData(res);
         //console.log(res)         
})
  }, [])
  
    const db = data?.results
    console.log('my filter2 db', db)
    //console.log('my filter2 genderFilter', genderFilter);
   
    /*some filter code with if statement
   if (data?.results !== undefined) {
      const filter = genderFilter;
      const filterSet = new Set(filter);
      console.log('genderFilter in filter', genderFilter)
      console.log('my filter3 db', db)
      const filteredBySpecies = data?.results.filter(e => filterSet.has(e.species.filter));
      console.log('filteredBySpecies', filteredBySpecies)
      const filteredByStatus = filteredBySpecies.filter(e => filterSet.has(e.status.filter));
      console.log('filteredByStatus', filteredByStatus)
      const filteredByGender = filteredByStatus.filter(e => filterSet.has(e.gender.filter));
      console.table('filteredByGender:', filteredByGender)
       
   }
  */


  //let db = [result, setResult]

  //const db = result?.results?


  //console.log('my db', db)
  //console.log('my object:', data)
  //console.log(data?.results)
  
/*
  genderFilter = useSelector(({ application }) => application.setSpeciesFilterType);
  useEffect(() => { console.log('genderFilter:', genderFilter) }, [genderFilter])
*/
//console.log('my result:', result)

//filter = (db, keys) => keys.reduce((a, key) => (a[key] = db[key], a), {});


/*
console.log('my reduce db', db)
console.log('my reduce genderFilter', genderFilter)
// функция фильтра с помощью редьюс
const filter = (db, genderFilter) => {
  genderFilter.reduce((a, key) => (a[key] = db[key], a), {})
}

let array = filter
console.table('my filter:', filter(result, genderFilter));
*/

/*
// функция фильтра с помощью filter
console.log('my filer db', db)
console.log('my filer genderFilter', genderFilter)
const filteredItems = db.filter(e => {
  const validations = {
    containsSpecies: species && species.includes(e.species),
    containsStatus: status && status.includes(e.status),
    containsGender: gender && gender.includes(e.gender),
  };
  return Object.values(validations).every(v => v);
});
console.table('my filteredItems:', filteredItems());
*/

//let db = result.results
// функция фильтра с помощью filter v.2
/*
console.log('my filter2 db', result)
console.log('my filter2 genderFilter', genderFilter);

const filter = genderFilter;
const filterSet = new Set(filter);
const filteredBySpecies = result.filter(e => filterSet.has(e.species.filter));
const filteredByStatus = filteredBySpecies.filter(e => filterSet.has(e.status.filter));
const filteredByGender = filteredByStatus.filter(e => filterSet.has(e.gender.filter));
console.table('my filteredByGender:', filteredByGender)

*/

/*
const Content = () => {
  return data?.results?.map(....)
}
*/

  return (

/*    const currentTab = useSelector(({ application }) => application.activeTab)
    useEffect(() => { console.log('currentTab:', currentTab) }, [currentTab])
*/  
//.filter().filter().map

//data?.results?.filter(obj => genderFilter.every(el => Object.values(obj).includes(el)))

/* работающий код для вывода All
      {data?.results?.filter(item => (
        genderFilter.indexOf('All') > -1 ? item :
        genderFilter === 'Human' ? item.species === genderFilter :
        item)).map(value => {
*/

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


      {data?.results?.filter(obj => genderFilter.every(el => Object.values(obj).includes(el))).map(value => {

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