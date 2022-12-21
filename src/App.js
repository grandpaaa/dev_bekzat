import logo from './logo.svg';
import 'antd/dist/antd.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './container/main'
import About from './container/about'

function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route exact path="/dev_bekzat" component={Main}/>
            <Route exact path="/dev_bekzat/asd" component={About}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
