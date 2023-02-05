import './App.css';
import Sidebar from './components/Sidebar'
import styled from 'styled-components'

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Overview from './pages/Overview'
import Characters from './pages/Characters'
import Classes from './pages/Classes'
import Skills from './pages/Skills'
import Magic from './pages/Magic'
import Search from './pages/Search'
import About from './pages/About'
import Settings from './pages/Settings'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Innverse Stats</h1>
      </header>
      <div className="body">
        <Router>
          <Sidebar />
          <main>
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/magic" element={<Magic />} />
              <Route path="/search" element={<Search />} />
              <Route path="/about" element={<About />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </Router>
      </div>
    </div>
  );
}

export default App;
