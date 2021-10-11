import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import setActiveTab from '../Store/actions/setActiveTab';

import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import RoomIcon from '@mui/icons-material/Room';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    dispatch(setActiveTab(newValue));
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
      <Tab icon={<SwitchAccountIcon />} label="CHARACTERS" /> 
      <Tab icon={<SubscriptionsIcon />} label="EPISODE " />
      <Tab icon={<RoomIcon />} label="LOCATIONS" />
      <Tab icon={<FormatListBulletedIcon />} label="My watch list" />
    </Tabs>
  );
}