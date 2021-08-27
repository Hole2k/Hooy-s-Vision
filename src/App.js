import './App.css';
import Home from './Pages/HomePage/Home';
import Error from './Pages/Error/Error';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";



function App() {
  return (
    <div className="App">
<Navbar/>

<Router>
    <Switch>
      <Route exact path ="/" component = {Home}/>

      <Route exact path = "/Error" component ={Error}/>
      <Redirect to ="/Error"/>

    </Switch>
    </Router>


    </div>
  );
}

export default App;
