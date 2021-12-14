import React, { useState, useEffect } from 'react';

//import parks data...
// import rides from "./Hack_a_Thon/park/rides";
import './styles/app.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ParksList from './components/ParksList';
import ParkDetails from './components/ParkDetails';
import axios from "axios";

function App() {
  const [parkData, setParkData] = useState([]);

  useEffect (()=> {
    async function getParks () {
      const res = await axios.get("http://localhost:3001/")
      setParkData(res.data.parks)
    }
    getParks()
  }, [])

  return (
    <div className="App">
      <header>
        <h1 className="banner">Whose Ride Is It Anyway</h1>
      </header>
      <main>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/allparks"
            component={(props) => <ParksList {...props} parkData={parkData} />}
          />
          <Route
            path="/allparks/:id"
            component={(props) => <ParkDetails {...props} parkData={parkData}  />}
          />
          {/* <Route path="/new" component={(props) => <AddParksPage {...props} newPark={newPark} handleChange={handleChange} addBoat={addBoat}/>} */}
        </Switch>
      </main>
    </div>
  );
}

export default App;
