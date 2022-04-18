import {useState} from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import CreateColorPalette from './pages/CreateColorPalette'
import CreateFontPair from './pages/CreateFontPair'
import ViewMyStyles from './pages/ViewMyStyles'
import './App.css';

function App() {

  const [user, setUser ] = useState(null)

  return (
    <div className="App light">
      <HashRouter>
        <Header user={user} setUser={setUser}/>
        <div className="page__container">
          <Routes>
            <Route 
              exact path="/" 
              element={ <HomePage user={user}/> } 
            />
            <Route 
              exact path="/signup" 
              element={ <SignUp /> } 
            />
            <Route 
              exact path="/login" 
              element={ <LogIn setUser={setUser} /> } 
            />
            <Route 
              exact path="/create-color-palette" 
              element={ <CreateColorPalette /> } 
            />
            <Route 
              exact path="/create-font-pair" 
              element={ <CreateFontPair /> } 
            />
            <Route 
              exact path="/view-styles" 
              element={ <ViewMyStyles /> } 
            />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
