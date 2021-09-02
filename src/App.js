import './App.css';
import Home from './Pages/HomePage/Home';
import Error from './Pages/Error/Error';
import Navbar from './components/Navbar/Navbar';

import Contact from './Pages/Contact/Contact'
import Shop from './Pages/Shop/Shop'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Footer from './components/Footer/Footer';


import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";



function App() {
  return (
    <div className="App">
<Navbar/>
<div className="main-container">
<Router>
    <Switch>
      <Route exact path ="/" component = {Home}/>
      <Route exact path ="/Contact" component = {Contact}/>
      <Route exact path ="/Shop" component = {Shop}/>
      <Route exact path ="/Login" component = {Login}/>
      <Route exact path ="/Register" component = {Register}/>
      <Route exact path = "/Error" component ={Error}/>
      <Redirect to ="/Error"/>

    </Switch>
    </Router>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
