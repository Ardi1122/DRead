"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Auth = () => {
  const [role, setRole] = useState('');
  const router = useRouter();

  const handleSignUp = () => {
    if (role === 'author') {
      router.push('/author');
    } else if (role === 'reader') {
      router.push('/reader');
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold">Sign In / Sign Up</h1>
      <div>
        <label>
          <input
            type="radio"
            value="author"
            checked={role === 'author'}
            onChange={() => setRole('author')}
          />
          Author
        </label>
        <label>
          <input
            type="radio"
            value="reader"
            checked={role === 'reader'}
            onChange={() => setRole('reader')}
          />
          Reader
        </label>
      </div>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default Auth;