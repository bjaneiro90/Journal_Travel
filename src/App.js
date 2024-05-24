import "./css/header.css"
import "./css/landingPage.css"
import "./css/login.css"
import './App.css';
import { LandingPage } from './pages/LandingPage';
import { Header } from './components/Header';
import { Counter } from "./components/hooks/Counter";
import { Login } from "./pages/LogIn";

function App() {
  return (
    <>
    
    <Header/>
   {/* <LandingPage/> */}
   <Login/>


    </>
  );
}

export default App;
