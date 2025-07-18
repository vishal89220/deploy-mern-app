import { useState } from 'react';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './component/Main';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from './component/Pages/About';
import Teampage from './component/Pages/Teampage';
import Contact from './component/Pages/Contact';
import Faqs from './component/Pages/Faqs';
import Notfound from './component/Pages/Notfound';
import Wishlist from './component/Pages/Wishlist';
import Login from './component/Pages/Login.jsx';
import Viewmore from './component/Pages/Viewmore.jsx';
import Signup from './component/Pages/Signup.jsx';
import Dashboard from './component/Pages/Dashboard/Dashboard.jsx';
import DashHead from './component/Pages/Dashboard/DashHead.jsx';
import Sidebar from './component/Pages/Dashboard/Sidebar.jsx';
import RefreshHandler from './component/Pages/RefreshHandler.jsx';

function App() {
  const [allList, setAllList] = useState([]);
  const [isAuthenticated , setIsAuthenticated] = useState(false)

   const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // or use context/state

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};


    
  const [openSide , setOpenSide] = useState(false)

  const OpenSidebar = ()=> {
    setOpenSide(!openSide)
  }

  return (
    <BrowserRouter>
    <RefreshHandler  setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        {/* Routes with Navbar */}
        <Route element={<Navbar />}>
          <Route path='/' element={<Main allList={allList} setAllList={setAllList} />} />
          <Route path='/home' element={<Main allList={allList} setAllList={setAllList} />} />
          <Route path='/About' element={<About />} />
          <Route path='/Teampage' element={<Teampage />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Faqs' element={<Faqs />} />
          <Route path='/wishlist' element={<Wishlist allList={allList} setAllList={setAllList} />} />
          <Route path='/view' element={<Viewmore allList={allList} setAllList={setAllList} />} />
        </Route>

        {/* Routes without Navbar */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <div className="grid_container">
        <Sidebar openSide={openSide} OpenSidebar={OpenSidebar} />
        <DashHead OpenSidebar={OpenSidebar} />
        <Dashboard />
      </div>
    </PrivateRoute>
  }
/>




        {/* Fallback route */}
        <Route path='*' element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
