import React, { useState, useEffect } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMyLocation } from '../store/MapPage/mapSlice';
import LoginButton from './LoginButton';
import LoginInput from './LoginInput';
import Logo from './Logo';

const isUsernameValid = (username) => {
  return username.length > 0 && username.length < 10 && !username.includes(' ');
};

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [locationErrorOccurred, setLocationErrorOccurred] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    navigate('/map');
  };

  const onSuccess = (position) => {
    console.log('🚀 ~ file: LoginPage.js:22 ~ onSuccess ~ position:', position);
    dispatch(
      setMyLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    );
  };

  const onError = (error) => {
    console.log('error occured when trying to load locations');
    console.log('🚀 ~ file: LoginPage.js:26 ~ onError ~ error:', error);
    setLocationErrorOccurred(true);
  };

  const locationOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    // maximumAge: 0,
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      onSuccess,
      onError,
      locationOptions
    );
  }, []);

  return (
    <div className='l_page_main_container'>
      <div className='l_page_box'>
        <Logo />
        <LoginInput username={username} setUsername={setUsername} />
        <LoginButton
          disabled={!isUsernameValid(username) || locationErrorOccurred}
          onClickHandler={handleLogin}
        />
      </div>
    </div>
  );
};

export default LoginPage;
