import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import React from 'react'; //ES6 js
import Profile from './pages/Profile/Profile';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';

export default function App(){
    return(
        <Router>
            <div className="App" id="App">
                <meta httpEquiv="Cache-Control" content=" no-cache, no-store, must-revalidate"></meta>
                <header className="App-header" id="App-header">
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/Profile" element={<Profile/>}/>
                    </Routes>
                </header>
            </div>
        </Router>
    )
}