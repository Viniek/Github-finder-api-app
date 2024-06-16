
import React, { useEffect } from 'react';
import Header from './Pages/Header';
import UserDetails from './Pages/UserDetails';
import Repositories from './Pages/Repositories';
import Followers from './Pages/Followers';
import useStore from '../src/Pages/store';
import './App.css';

function App() {
  const { username, setUserData, setReposData, setFollowersData } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
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

    fetchData();
  }, [username, setUserData, setReposData, setFollowersData]);

  return (
    <div className='App'>
      <Header />
      <UserDetails />
      <Repositories />
      <Followers />
    </div>
  );
}

export default App;
