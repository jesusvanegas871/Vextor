import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Default route */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
