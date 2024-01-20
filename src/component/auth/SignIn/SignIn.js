import React, { useState } from 'react';
import { auth } from '../../../firebase';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <label>Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
      <label>Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
