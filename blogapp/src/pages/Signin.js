import React from 'react';

const Signin = () => {
  return (
    <form>
    <input type="text" name="username" placeholder="Username" />
    <input type="password" name="password" placeholder="Password" />
    <button type="submit">Signin</button>
  </form>
  );
};

export default Signin;
