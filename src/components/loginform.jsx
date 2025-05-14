import React from 'react';
import useInput from '../hooks/useinput';

const LoginForm = () => {
  const email = useInput('');
  const password = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email:", email.value);
    console.log("password:", password.value);
    email.reset();
    password.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" {...email} />
      <input type="password" placeholder="Password" {...password} />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;