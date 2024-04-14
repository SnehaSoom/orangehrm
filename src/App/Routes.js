import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom';
// import ProtectedRoute from './ProtectedRoute';
import LoginIndex from '../components/Authentication/Login';
import SignUpIndex from '../components/Authentication/SignUp';
import LayoutIndex from '../components/Layout';
import NotFound from './NotFound';
import PIMIndex from '../components/PIM';

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
                        <Route path="/pim" element={<PIMIndex />} />
                        <Route path="/leave" element={<h1>leave</h1>} />
                        <Route path="/time" element={<h1>time</h1>} />
                        <Route path="/dashboard" element={<h1>dashboard</h1>} />
                        <Route path="/directory" element={<h1>directory</h1>} />
                        <Route path="/maintenance" element={<h1>maintenance</h1>} />
                        <Route path="/my-info" element={<h1>My Info</h1>} />
                        <Route path="/buzz" element={<h1>buzz</h1>} />
                        
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
