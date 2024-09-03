import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './Components/Layout/Home';

function App() {
  return (
    <section>
      <Switch>
        <Route>
          <Home exact path="/" />
        </Route>
      </Switch>
    </section>
  );
}

export default App;
