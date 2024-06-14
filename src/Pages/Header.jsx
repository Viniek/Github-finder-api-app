
import React, { useState } from 'react';
import useStore from './store';
import { fetchGitHubUser } from './api';
import './Header.css';

function Header() {
  const [inputValue, setInputValue] = useState('');
  const setUsername = useStore((state) => state.setUsername);
  const setUserData = useStore((state) => state.setUserData);
  const setReposData = useStore((state) => state.setReposData);
  const setFollowersData = useStore((state) => state.setFollowersData);

  const handleSearch = async () => {
    setUsername(inputValue);
    try {
      const { userData, reposData, followersData } = await fetchGitHubUser(inputValue);
      setUserData(userData);
      setReposData(reposData);
      setFollowersData(followersData);
    } catch (error) {
      console.error('Error fetching GitHub user:', error);
    }
  };

  return (
    <div className='nav_container'>
      <h1>GITHUB FINDER</h1>
      <p>By <a href='https://github.com/Viniek'>Victory Njeri</a></p>
      <div className='form'>
        <input 
          type='text' 
          placeholder='enter a username' 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type='button' onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default Header;
