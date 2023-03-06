import './App.css';
import { Route} from 'react-router-dom';
import { Routes} from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom';
import AboutPage from './component/pages/AboutPage'
import SignupPage from './component/SignupForm/SignupPage'
import LoginPage from './component/LoginForm/LoginPage'
import Dashboard from './component/pages/DashboardPage'
import Homepage from './component/pages/HomePage'
import DropdownProfle from './component/DropdownProfle';
import Navbar from './component/pages/Navbar';
import ProfileSettingsPage from './component/pages/ProfileSettingsPage';
import SettingsPage from './component/pages/SettingsPage';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/dropdownprofile" element={<DropdownProfle />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/ProfileSettingsPage" element={<ProfileSettingsPage/>} />
          <Route path="/settingspage" element={<SettingsPage />} />
          <Route path="/signuppage" element={<SignupPage/>} />

        </Routes>
      </BrowserRouter> 
     

    </div>
  );
}

export default App;
