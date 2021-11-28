import { FaLifeRing, FaQuestion, FaUserAlt, FaRocketchat } from 'react-icons/fa'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import AboutPage from './components/AboutPage'
import Chatroom from './components/Chatroom'
import MyProfile from './components/MyProfile'
import Support from './components/Support'

import chatty_logo from './img/chatty_logo.png'

import './App.css'

function App() {
    return (
        <div className="App">
            <header>
                <BrowserRouter>
                    <ul>
                        <li className="menuItems">
                            <img
                                className="menuLogo"
                                src={chatty_logo}
                                alt="logo"
                            />
                            chatty
                        </li>

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
                                <FaRocketchat /> Chat room
                            </li>
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
    )
}

export default App
