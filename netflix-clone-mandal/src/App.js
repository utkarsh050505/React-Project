import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './features/userSlice';

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    React.useEffect(() => {
        const unsub = auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                dispatch(
                    login({
                        uid: userAuth.uid,
                        email: userAuth.email,
                    })
                );
            } else {
                dispatch(logout());
            }
        });

        return () => unsub(); // Clean up the subscription on unmount
    }, [dispatch]); // Add dispatch as a dependency

    return (
        <div className="app">
            <Router>
                {!user ? (
                    <LoginScreen />
                ) : (
                    <Routes>
                        <Route path="/profile" element={<ProfileScreen />} />
                        <Route path="/" element={<HomeScreen />} />
                    </Routes>
                )}
            </Router>
        </div>
    );
}

export default App;