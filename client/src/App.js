import './App.css';
import Login from './components/Login';
import Topbar from './components/Navbar';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 


function App() {
  return (
    <div className="App">
      <Router>
        <Wrapper>
        <Topbar/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
        </Wrapper>
      </Router>

    </div>
  );
}

export default App;
