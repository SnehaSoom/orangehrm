import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom';
// import ProtectedRoute from './ProtectedRoute';
import LoginIndex from '../components/Authentication/Login';
import SignUpIndex from '../components/Authentication/SignUp';
import LayoutIndex from '../components/Layout';
import NotFound from './NotFound';
import MainContainer from '../components/MainContainer/MainContainer';

export default function Routers() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/login" element={<LoginIndex />} />
                    <Route path="/signup" element={<SignUpIndex />} /> */}
                    <Route path="*" element={<NotFound/>} />
                    <Route path="/" element={<LayoutIndex />}>
                        <Route path="/" element={<h1>Home</h1>} />
                        <Route path="/search" element={<LoginIndex />} />
                        <Route path="/admin" element={<LoginIndex />} />
                        <Route path="/pim" element={<MainContainer />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
