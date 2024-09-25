import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './Components/Layout/Home';
import About from './Components/Layout/About';

function App() {
  return (
    <section>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </Switch>
    </section>
  );
}

export default App;
