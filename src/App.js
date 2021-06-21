
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Home1 from './components/pages/Home1/Home1';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home1}></Route>
      </Switch>
    </Router>

  );
}

export default App;
