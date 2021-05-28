import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DataView from './screen/DataView';
import DetailsView from './screen/DetailsView';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <DataView />
        </Route>
        <Route path="/:id">
          <DetailsView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
