import "./css/header.css"
import "./css/landingPage.css"
import "./css/login.css"
import './App.css';
import { LandingPage } from './pages/LandingPage';
import { Header } from './components/Header';
import { Counter } from "./components/hooks/Counter";
import { Login } from "./pages/LogIn";
import { HookEffect } from "./components/hooks/HookEffect";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
  return (
    <>
    
    <Header/>
    <RegisterPage/>
   {/* <LandingPage/> */}
   {/* <Login/> */}
   {/* <HookEffect/> */}


    </>
  );
}

export default App;
