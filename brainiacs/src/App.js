import LandingPageGeneral from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPageGeneral /> } />
        <Route exact path='/login' element={<Login /> } />
        <Route exact path='/signup' element={<Signup/> } />


      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
