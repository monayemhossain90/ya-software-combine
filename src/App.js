
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ApplyPage from './Pages/ApplyPage';
import HomePage from './Pages/HomePage';


function App() {
  return (
    <>
    <Header></Header>
    <Routes>
    <Route path='/' element={<HomePage />}></Route>
    <Route path='/apply' element={<ApplyPage />}></Route>
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
