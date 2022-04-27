import {useState, useEffect} from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import CreateColorPalette from './pages/CreateColorPalette'
import CreateFontPair from './pages/CreateFontPair'
import ViewMyPalettes from './pages/ViewMyPalettes'
import ViewMyFonts from './pages/ViewMyFonts'
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
    <main className="App dark" data-testid="app">
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
            {/* <Route 
              exact path="/view-styles" 
              element={ <ViewMyStyles /> } 
            /> */}
            <Route 
              exact path="/view-palettes" 
              element={ <ViewMyPalettes /> } 
            />
            <Route 
              exact path="/view-fonts" 
              element={ <ViewMyFonts /> } 
            />
            <Route 
              exact path="/edit-font-pair/:fontPairId" 
              element={ <EditFontPair /> } 
            />

          </Routes>
        </div>
      </HashRouter>
      <Footer />
    </main>
  );
}

export default App;
