import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from '../pages/Register/Register';

// Placeholder components for future pages
const Login = () => <div className="flex items-center justify-center min-h-screen text-v-white">Login Page (Placeholder)</div>;
const Dashboard = () => <div className="flex items-center justify-center min-h-screen text-v-white">Dashboard Page (Placeholder)</div>;

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Default route */}
        <Route path="/" element={<Navigate to="/register" replace />} />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/register" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
