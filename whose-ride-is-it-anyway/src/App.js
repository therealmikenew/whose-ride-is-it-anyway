import React, { useState } from 'react';
//import parks data...
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ParksList from './components/ParksList';
import ParkDetails from './components/ParkDetails';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>
          npm
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/listings"
            component={(props) => <ParksList {...props} PASSPARKSDATA />}
          />
          <Route
            path="/parklistings/:id"
            component={(props) => <ParkDetails {...props} PASSPARKSDATA />}
          />
          {/* <Route path="/new" component={(props) => <AddParksPage {...props} newPark={newPark} handleChange={handleChange} addBoat={addBoat}/>} */}
        </Switch>
      </main>
    </div>
  );
}

export default App;
