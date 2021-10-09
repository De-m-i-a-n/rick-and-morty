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
  const [activeTab, setActiveTab] = useState('Characters')
  const dispatch = useDispatch();
  //const activeTab = useSelector(({ application }) => application.activeTab)
  const currentTab = useSelector(({ application }) => application.activeTab)

  useEffect(() => { console.log(currentTab) }, [currentTab])

  const handleActiveTab = name => {
    setActiveTab(name)
  }


   return (
    <StyledEngineProvider injectFirst>
    <Header />

    {
      activeTab === 'characters' && (
        <Characters />
      )
    }

    {
      activeTab === 'episodes' && (
        <Episodes />
      )
    }

    {
      activeTab === 'locations' && (
        <Locations />
      )
    }

    {
      activeTab === 'myWatchList' && (
        <MyWatchList />
      )
    }
        
    <Pagination />
    <Popup />
  </StyledEngineProvider>
  )
}

export default App;