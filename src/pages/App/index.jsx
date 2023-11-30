import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import MainPage from '../MainPage/MainPage';
import MyBooksPage from '../MyBooksPage/MyBooksPage';
import Footer from '../../components/Footer/Footer';


export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <div>
      <NavBar user={user} setUser={setUser} />
    <main className="App">
      {
        <>
          <Routes>
            <Route path="/" element={<MainPage user={user}/>} />
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
      }
    </main>
      <Footer/>
    </div>
  );
}
