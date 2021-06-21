
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Home1 from './components/pages/Home1/Home1';
import Products from './components/pages/Products/Products';
import Services from './components/pages/Services/Services';
import SignUp from './components/pages/SignUp/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home1}></Route>
        <Route path='/products' exact component={Products}></Route>
        <Route path='/services' exact component={Services}></Route>
        <Route path='/sign-up' exact component={SignUp}></Route>
      </Switch>
    </Router>

  );
}

export default App;
