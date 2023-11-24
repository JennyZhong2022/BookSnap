import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage';
import NavBar from '../../components/NavBar';
import './App.css';
import BookList from '../BookList';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar user={ user } setUser={ setUser } />
          <Routes>
            <Route path="/books" element={ <BookList /> } />
          </Routes>
        </>
        :
        <AuthPage setUser={ setUser }/>
      }
    </main>
  );
}