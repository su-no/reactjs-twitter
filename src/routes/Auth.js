import React, { useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChange = (event) => {
    const { target: { name, value } } = event;
    // const name = event.target.name;
    // const value = event.target.value;
    if (name === 'email') {
      setEmail(value)
    } else if (name == 'password') {
      setPassword(value)
    }
    console.log(event.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name='email'
          type='text'
          placeholder='Email'
          required
          value={email}
          onChange={onChange} />
        <input
          name='password'
          type='password'
          placeholder='Password'
          required
          value={password}
          onChange={onChange} />
        <input
          name='submit'
          type='submit'
          value='Log In' />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  )
};
export default Auth;