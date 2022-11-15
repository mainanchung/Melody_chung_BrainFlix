import './App.scss';
import { BrowserRouter, Navigate, NavLink, Routes, Route } from 'react-router-dom'
import UploadPage from './pages/UploadPage';
import Home from './pages/Home';

function App() {

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/:VideoId'  element={<Home />}/>
      <Route path="/upload-page" element={<UploadPage />}/>
    </Routes>
  </BrowserRouter> 

  );
}

export default App;
