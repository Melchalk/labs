import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from './Pages/NavigationBar';
import { LoginPage, LogoutPage, RegisterPage } from './Pages/AuthPage';
import MainPage from './Pages/MainPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path='*' element={<Navigate to='/'/>}/>
        <Route path='/auth' element={<LoginPage />}/>
        <Route path='/logout' element={<LogoutPage />}/>
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/home' element={<MainPage />}/>
      </Routes>
    </BrowserRouter>
  );
}