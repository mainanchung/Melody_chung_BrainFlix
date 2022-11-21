import './App.scss';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import UploadPage from './pages/UploadPage';
import Home from './pages/Home';
import Header from "./Components/Header/Header";

function App() {

  return (

    <BrowserRouter>
    <div className="header">
          <Header />
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path='/:VideoId'  element={<Home />}/>
        <Route path="/upload-page" element={<UploadPage />}/>
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter> 

  );
}

export default App;
