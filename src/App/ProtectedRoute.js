import React, { useEffect } from 'react';
import { Routes, Route, redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LayoutIndex from '../components/Layout';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      return navigate('/login');
    }
    return () => { 
    console.log('unmounting');
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<LayoutIndex />}>
        {children}
      </Route>
    </Routes>

  )
}

export default ProtectedRoute;
