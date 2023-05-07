import React from 'react';

const LoginButton = ({ onClickHandler, disabled }) => {
  return (
    <button
      disabled={disabled}
      className='l_page_login_button'
      onClick={onClickHandler}
    >
      Login
    </button>
  );
};

export default LoginButton;
