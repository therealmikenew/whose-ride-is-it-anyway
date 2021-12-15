import React, { useState, useEffect } from "react";
import "./styles/app.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ParksList from "./components/ParksList";
import ParkDetails from "./components/ParkDetails";
import AddParksPage from "./components/AddParksPage";
import axios from "axios";

function App() {
  const [parkData, setParkData] = useState([]);
  const [newPark, setNewPark] = useState({
    name: "",
    location: "",
    image: "",
  });

  useEffect(() => {
    async function getParks() {
      const res = await axios.get("http://localhost:3001/");
      setParkData(res.data.parks);
    }
    getParks();
  }, []);

  const handleNewPark = (e) => {
    setNewPark({ ...newPark, [e.target.name]: e.target.value });
  };

  const addPark = (e) => {
    e.preventDefault();
    const currentParks = parkData;
    const addedPark = {
      ...newPark,
      id: parseInt(parkData.length + 1),
    };
    currentParks.push(addedPark);
    setParkData(currentParks);
    setNewPark({ id: "", name: "", location: "", image: "" });
  };

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
            component={(props) => (
              <ParkDetails {...props} parkData={parkData} />
            )}
          />
          <Route
            path="/new"
            render={(props) => (
              <AddParksPage
                {...props}
                newPark={newPark}
                handleNewPark={handleNewPark}
                addPark={addPark}
              />
            )}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
