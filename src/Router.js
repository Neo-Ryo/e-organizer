import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/register/Register';

export default function MyRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Register} />
        <Route path='/home' component={Home} />
      </Switch>
    </Router>
  );
}
