import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from "./components/login/Login";
import Dashboard from './components/dashboard/dashboard';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
function App() {
  const loggedIn=useSelector(state=>state.loggedIn)
  console.log("loggedIn",loggedIn);
  const navigate=useNavigate()
  useEffect(()=>{
    if(loggedIn){
      navigate("dashboard")
    }
    else navigate("login")
  },[loggedIn])
  return (
    <div className="App">
    <div  className='mainDive'>
      <Routes>
        <Route path='/login' Component={Login}></Route>
        <Route path='/dashboard' Component={Dashboard}></Route>
      </Routes>
    </div>
    </div>
  );
}

export default App;
