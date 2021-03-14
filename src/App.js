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
import Booking from './Components/Booking/Booking';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import NoDataFound from './Components/NoDataFound/NoDataFound';
import ConfirmTicket from './Components/ConfirmTicket/ConfirmTicket';

function App() {
  const [fromLocation, setFromLocation] = useState([]);
  const [toLocation, setToLocation] = useState([]);
  const handleFind = (from, to) => {
    setFromLocation(from);
    setToLocation(to);
  }

  const foundLoc = data.filter(fd => fd.sourceCity === fromLocation && fd.destinationCity === toLocation)

  return (
    <div className="App ">
      <Router>
        <nav className="nav bg-dark p-4 " >
          <ul>
            <Link className="text-decoration-none headerNav" to="/home">HOME </Link>
            <Link className="text-decoration-none headerNav" to ="/about">ABOUT</Link>
            <Link className="text-decoration-none headerNav" to="/contact">CONTACT</Link>
            <Link className="text-decoration-none headerNav active" to ="/sign-up">SIGN UP</Link>
            {/* <Link to="/getTicket">Get-Ticket </Link> */}
          </ul>

        </nav>
        <Switch>
          <Route exact path="/">
            <Home data={data} handleFind={handleFind}></Home>
          </Route>
          <Route path="/home">
            <Home data={data} handleFind={handleFind}></Home>
          </Route>
          <Route path="/about">
            
          </Route>
          <Route path="/contact">
            
          </Route>
          <Route path="/sign-up">
            
          </Route>
          <Route path="/getTicket">
            <GetTicket data={foundLoc}></GetTicket>
          </Route>
          <Route path="/booking/:id">
            <Booking data={data}></Booking>
          </Route>
          <Route path="/confirmTicket">
            <ConfirmTicket></ConfirmTicket>
          </Route>
          <Route path="*">
            <NoDataFound></NoDataFound>
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
