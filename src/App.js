import './App.css';
import Explorer from './explorer';
import Home from './home';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Postcat from './postcat';
import Integration from './integration';
import About from './about';


function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" component={Home} exact={true}></Route>
          <Route path="/explorer" component={Explorer} exact={true}></Route>
          <Route path="/postcat" component={Postcat} exact={true}></Route>
          <Route path="/integration" component={Integration} exact={true}></Route>
          <Route path="/about" component={About} exact={true}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
