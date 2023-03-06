import './App.css';
import { Route} from 'react-router-dom';
import { Routes} from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom'; 
import LoginPage from './component/pages/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          {/* <Route path="/dropdownprofile" element={<DropdownProfle />} /> */}
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/aboutpage" element={<AboutPage />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/homepage" element={<Homepage />} /> */}
          {/* <Route path="/ProfileSettingsPage" element={<ProfileSettingsPage/>} /> */}
          {/* <Route path="/settingspage" element={<SettingsPage />} /> */}
          {/* <Route path="/signuppage" element={<SignupPage/>} /> */}
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
