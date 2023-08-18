import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Comments from "./Components/Comments/Comments"
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/" component={Comments}/>
      </Switch>
    </Router>
  );
}

export default App;
