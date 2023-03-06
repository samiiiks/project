import './App.css';
import { Route} from 'react-router-dom';
import { Routes} from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom'; 
import LoginPage from './component/pages/LoginPage';
import PageNotFound from './component/pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          {/* <Route path="/dropdownprofile" element={<DropdownProfle />} /> */}
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/homepage" element={<Homepage />} /> */}
          {/* <Route path="/profile-page" element={<ProfileSettingsPage/>} /> */}
          {/* <Route path="/settings" element={<SettingsPage />} /> */}
          {/* <Route path="/sign-up" element={<SignupPage/>} /> */}
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
