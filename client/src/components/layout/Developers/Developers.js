import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import axios from 'axios';
import './Developers.css';

const profiles = [
  {
    name: 'manny',
    gravatar: 'asdf',
  },
  {
    name: 'manny',
    gravatar: 'asdf',
  },
  {
    name: 'manny',
    gravatar: 'asdf',
  },
];

const Developers = () => {
  const [profileCards, setProfileCards] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/users');
      setProfileCards(res.data);
    };
    getData();
  }, []);

  const cards = profileCards.map((profile, key) => (
    <ProfileCard key={key} profile={profile} />
  ));
  return <div className='developer-page-card-container'>{cards}</div>;
};

export default Developers;
