import './App.css';
import Home from './components/home/home';
import Game from './components/home/game';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/game/:id" component={Game}></Route>
      </Switch>
    </Router>
  );
}

export default App;
