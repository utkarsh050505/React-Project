import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './features/userSlice';

function App() {
 const user = useSelector(selectUser);
  console.log(user);
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
        {!user ?
        (
          <LoginScreen />
        )
        :
        (<Switch>
          <Route path="/">
          <HomeScreen />
          </Route>
        </Switch>)
        }   
      </Router>
    </div>
  );
}

export default App;