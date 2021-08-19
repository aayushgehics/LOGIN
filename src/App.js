
import './App.css';
import {Route,HashRouter as Router,} from 'react-router-dom'
import Components from './login/components';
function App() {
  return (
    <Router>
    <div className="App">
     <Route path='/'  component={Components}></Route>
    </div>
    </Router>
  );
}

export default App;
