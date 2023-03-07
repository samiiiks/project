import './App.css';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './component/pages/LoginPage';
import Homepage from './component/pages/HomePage'
import AboutPage from './component/pages/AboutPage'
import SignupPage from './component/pages/SignupPage';
import Navbar from './component/common/Navbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/dropdownprofile" element={<DropdownProfle />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/home" element={<Homepage />} />
          {/* <Route path="/profile-page" element={<ProfileSettingsPage/>} /> */}
          {/* <Route path="/settings" element={<SettingsPage />} /> */}
          <Route path="/signup" element={<SignupPage />} />
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
