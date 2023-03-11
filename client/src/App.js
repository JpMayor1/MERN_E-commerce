import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Products from './pages/Products/Products';
import Adminregister from './pages/Auth/Adminregister';
import Adminlogin from './pages/Auth/Adminlogin';

function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products' element={<Products />} />
        <Route path='/admin/register' element={<Adminregister />} />
        <Route path='/admin/login' element={<Adminlogin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
