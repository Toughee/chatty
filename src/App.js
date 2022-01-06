import { FaLifeRing, FaQuestion, FaUserAlt, FaRocketchat } from 'react-icons/fa'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import Chatroom from './components/Chatroom'
import MyProfile from './components/MyProfile'
import Support from './components/Support'

import './App.css'

function App() {
    return (
        <div className="App">
            <header>
                <BrowserRouter>
                    <ul>
                        <Link to="/HomePage">
                            <li className="menuItems">Home</li>
                        </Link>

                        <Link to="/AboutPage">
                            <li className="menuItems">
                                <FaQuestion /> About
                            </li>
                        </Link>

                        <Link to="/Support">
                            <li className="menuItems">
                                <FaLifeRing /> Support
                            </li>
                        </Link>

                        <Link to="/MyProfile">
                            <li className="menuItems">
                                <FaUserAlt /> Profile
                            </li>
                        </Link>
                        <Link to="/Chatroom">
                            <li className="menuItems">
                                <FaUserAlt /> Chat Room
                            </li>
                        </Link>
                    </ul>

                    <br />
                    <Routes>
                        <Route path="/HomePage" element={<HomePage />} />
                        <Route path="/AboutPage" element={<AboutPage />} />
                        <Route path="/Support" element={<Support />} />
                        <Route path="/MyProfile" element={<MyProfile />} />
                        <Route path="/Chatroom" element={<Chatroom />} />
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    )
}

export default App
