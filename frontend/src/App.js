import {useState, useEffect} from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import CreateColorPalette from './pages/CreateColorPalette'
import CreateFontPair from './pages/CreateFontPair'
import ViewMyStyles from './pages/ViewMyStyles'
import EditFontPair from './pages/EditFontPair'
import './App.css';

function App() {

  const [user, setUser ] = useState(null)

  useEffect(() => {
    const loggedIn = localStorage.getItem("user")
    if (loggedIn) {
      const found = JSON.parse(loggedIn)
      setUser(found)
    }
  }, [])

  return (
    <div className="App light">
      <HashRouter>
        <Header user={user} setUser={setUser}/>
        <div className="page__container">
          <Routes>
            <Route 
              exact path="/" 
              element={ <HomePage user={user} setUser={setUser} /> } 
            />
            <Route 
              exact path="/signup" 
              element={ <SignUp /> } 
            />
            <Route 
              exact path="/login" 
              element={ <LogIn setUser={setUser} user={user}/> } 
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
            <Route 
              exact path="/edit-font-pair/:fontPairId" 
              element={ <EditFontPair /> } 
            />

          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
