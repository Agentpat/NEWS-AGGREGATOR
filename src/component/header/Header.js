import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import './Header.css';

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header>
      <div className="logo">Your Logo</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>
      <div className="user-options">
        {user ? (
          <>
            <p>Welcome, {user.displayName || user.email}!</p>
            {user.photoURL && <img src={user.photoURL} alt="Profile" />}
            <button onClick={handleSignOut}>Sign Out</button>
          </>
        ) : (
          <Link to="/signin">Sign In</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
