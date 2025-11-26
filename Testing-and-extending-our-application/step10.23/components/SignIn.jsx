import React, { useState } from 'react';
import { SIGN_IN } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';

const SignIn = ({ onSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const authStorage = useAuthStorage();

  const handleSignIn = async () => {
    try {
      // Dummy mutation call
      const result = await SIGN_IN({ username, password });
      await authStorage.saveToken(result.token);
      onSuccess();
    } catch (error) {
      console.error('SignIn error:', error);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
