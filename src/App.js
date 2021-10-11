import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StyledEngineProvider } from '@mui/material/styles';
import Header from './Header/Header';
import Characters from './Characters/Characters';
import Episodes from './Episodes/Episodes';
import Locations from './Locations/Locations';
import MyWatchList from './MyWatchList/MyWatchList';

import SortedList from './SortedList';
import Pagination from './Pagination';
import Popup from './Popupchar-info';

const App = () => {
  const currentTab = useSelector(({ application }) => application.activeTab)

  useEffect(() => { console.log('currentTab:', currentTab) }, [currentTab])

   return (
    <StyledEngineProvider injectFirst>
    <Header />

    {
      currentTab === 0 && (
        <Characters />        
      )
    }

    {
      currentTab === 1 && (
        // <Episodes />
          'Episodes'
      )
    }

    {
      currentTab === 2 && (
        // <Locations />
          'Locations'
      )
    }

    {
      currentTab === 3 && (
        // <MyWatchList />
          'WatchList'
      )
    }
    <SortedList />
    <Pagination />
    <Popup />
  </StyledEngineProvider>
  )
}

export default App;