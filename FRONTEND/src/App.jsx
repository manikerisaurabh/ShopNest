import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Profile from './components/profile/Profile';
import Footer from './components/footer/Footer'; // Import Footer component
import Setting from './components/setting/Setting';
import Cart from './components/cart/Cart';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar /> <Home /></>
    },
    {
      path: "/signup",
      element: <><Navbar /> <Signup /></>
    },
    {
      path: "/login",
      element: <><Navbar />  <Login /></>
    },
    {
      path: "/profile",
      element: <><Navbar /> <Profile /></>
    },
    {
      path: "/settings",
      element: <><Navbar /> <Setting /></>
    },
    {
      path: "/cart",
      element: <><Navbar /> <Cart /></>
    },
  ]);

  const [theme, setTheme] = useState('light');

  const updateTheme = (newTheme) => {
    console.log(newTheme);
    setTheme(newTheme);
  };

  return (
    <div data-theme={theme}>
      <RouterProvider router={router} />
      <Footer /> {/* Include Footer component here */}
    </div>
  );
}

export default App;
