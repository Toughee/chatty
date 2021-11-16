import AboutPage from './components/AboutPage';
import Chatroom from './components/Chatroom';
import MyProfile from './components/MyProfile';
import Support from './components/Support';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'


import './App.css';

function App() {
  return (
    <div className="App">
      <header>


        <BrowserRouter>
        <ul>
        <li >chatty</li>
                       

                        

                        <Link to="/AboutPage">
                        <li className="menuItems">About</li>
                        </Link>

                        <Link to="/Support">
                        <li className="menuItems">Support</li>
                        </Link>

                        <Link to="/MyProfile">
                        <li className="menuItems">Profile</li>
                        </Link>

                        <Link to="/Chatroom">
                        <li className="menuItems">Chat room</li>
                        </Link>

                        


        </ul>

                        <br />
                        <Routes>
                          <Route path="/Chatroom" element={<Chatroom />} />
                          <Route path="/MyProfile" element={<MyProfile />} />
                          <Route path="/AboutPage" element={<AboutPage />} />
                          <Route path="/Support" element={<Support />} />
                        </Routes>
            </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
