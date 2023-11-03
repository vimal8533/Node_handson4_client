import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import DashBoard from './component/DashBoard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="*" element={<Login />} />
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
