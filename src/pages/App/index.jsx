import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import MainPage from '../MainPage/MainPage';
import MyBooksPage from '../MyBooksPage/MyBooksPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<MainPage />} />
            {user && (
              <>
                <Route path="/mybooks" element={<MyBooksPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
              </>
            )}
            {!user && (
              <Route
                path="/api/user"
                element={<AuthPage setUser={setUser} />}
              />
            )}
          </Routes>
        </>
        // <AuthPage setUser={ setUser }/>
      }
    </main>
  );
}
