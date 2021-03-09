import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './Data/Data.json';
import { useState } from 'react';
import GetTicket from './Components/Get-Ticket/GetTicket';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [fromLocation, setFromLocation] = useState([]);
  const [toLocation, setToLocation] = useState([]);
  const handleFind = (from, to) => {
    setFromLocation(from);
    setToLocation(to);
  }
  const foundLoc = data.filter(fd => fd.sourceCity===fromLocation && fd.destinationCity===toLocation)
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <Link to="/home">Home </Link>
            {/* <Link to="/getTicket">Get-Ticket </Link> */}
          </ul>

        </nav>
        <Switch>
          <Route path="/home">
            <Home data={data} handleFind={handleFind}></Home>
          </Route>
          <Route path="/getTicket">
            <GetTicket data={foundLoc}></GetTicket>
          </Route>
          <Route path="/">
            <Home data={data} handleFind={handleFind}></Home>
          </Route>
        </Switch>
      </Router>
      {/* <h2>{fromLocation}</h2>
      <h2>{toLocation}</h2> */}
      {/* <Home data={data} handleFind={handleFind}></Home> */}

    </div>
  );
}

export default App;
