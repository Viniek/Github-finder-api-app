
import React, { useState } from 'react';
import useStore from '../Pages/store';
import { fetchGitHubUser } from '../Pages/api';
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
      const userResponse = await fetch(`https://api.github.com/users/${inputValue}`);
      const userData = await userResponse.json();
      setUserData(userData);

      const reposResponse = await fetch(userData.repos_url);
      const reposData = await reposResponse.json();
      setReposData(reposData);

      const followersResponse = await fetch(userData.followers_url);
      const followersData = await followersResponse.json();
      setFollowersData(followersData);
    } catch (error) {
      console.error('Error fetching data:', error);
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
