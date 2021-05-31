import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import React from 'react'


function App() {
  return (
    <Router>
    <React.Fragment>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path = "/" component={Index} />
        </Switch>
      </div>
    </React.Fragment>
    </Router>
  );
}

export default App;
