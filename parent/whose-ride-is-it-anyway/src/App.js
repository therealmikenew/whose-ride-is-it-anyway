import React, { useState } from "react";
//import parks data...
import rides from "./Hack_a_Thon/park/rides";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ParksList from "./components/ParksList";
import ParkDetails from "./components/ParkDetails";

function App() {
  const parks = [
    {
      name: "Rocky Point Amusement Park",
      hours:
        "Monday: 9AM - 7PM Tuesday: 9AM - 7PM Wednesday: 9AM - 7PM Thursday: 9AM - 7PM Friday: 9AM - 7PM Saturday/Sunday: Noon - Sunset",
      location: "Warwick, Rhode Island, United States",
      attractionsNumber: "24",
      water: "YES (1)",
      image:
        "https://en.wikipedia.org/wiki/Rocky_Point_Amusement_Park#/media/File:Amusement_Center,_Rocky_Point_Park,_R.I_(79847).jpg",
      deaths: 12,
      likes: 742,
      id: 100,
      comments: [{ post: "this sucks" }, { post: "AWESOME!" }],
    },

    {
      name: "Busch Gardens Williamsburg",
      hours:
        "Monday: 2 AM-9 PM Tuesday: 2 AM-9 PM Wednesday: 2 AM-9 PM Thursday: 2 AM-9 PM Friday: 2 AM-10 PM Saturday/Sunday: Noon- 10 PM",
      location: "James City County, Virginia, United States",
      attractionsNumber: "54",
      water: "YES (3)",
      image:
        "https://en.wikipedia.org/wiki/Busch_Gardens_Williamsburg#/media/File:Busch_Gardens_Williamsburg_Logo.svg",
      deaths: 8,
      likes: 53,
      id: 101,
    },

    {
      name: "Lake Winnepesaukah",
      hours: "Dawn- Dusk. Closed on Mondays.",
      location: "Rossville, Georgia, United States",
      attractionsNumber: "38",
      water: "YES (4)",
      image:
        "https://en.wikipedia.org/wiki/Lake_Winnepesaukah#/media/File:Lake_Winnepesaukah_Logo.png",
      deaths: 46,
      likes: 3,
      id: 102,
    },

    {
      name: "DollyWood’s Splash Country",
      hours:
        "Monday: 9 AM-7 PM Tuesday: 9 AM-7 PM Wednesday: 9 AM-7 PM Thursday: 9 AM-7 PM Friday: 9 AM-10 PM Saturday/Sunday: Noon- 10 PM",
      location: "Pigeon Forge, Tennessee, United States",
      attractionsNumber: "16",
      water: "YES (16)",
      image:
        "https://en.wikipedia.org/wiki/Dollywood's_Splash_Country#/media/File:The_logo_as_of_2016,_DSC.png",
      deaths: 2,
      likes: 538,
      id: 103,
    },

    {
      name: "Six Flags Over Texas",
      hours:
        "Monday:7 AM-7 PM Tuesday: 7 AM-7 PM Wednesday: 7 AM-7 PM Thursday: 7 AM-7 PM Friday: 7 AM-10 PM Saturday/Sunday: 7 AM- 10 PM",
      location: "Arlington, Texas, United States",
      attractionsNumber: "45",
      water: "YES (3)",
      image:
        "https://en.wikipedia.org/wiki/Six_Flags_Over_Texas#/media/File:Six_Flags_Over_Texas_logo.png ",
      deaths: 11,
      likes: 47,
      id: 104,
    },

    {
      name: "Hersheypark",
      hours:
        "Monday: 10 AM-7 PM Tuesday: 10 AM-7 PM Wednesday: 10 AM-7 PM Thursday: 10 AM-7 PM Friday: 10 AM-10 PM Saturday/Sunday: 9 AM- 10 PM",
      location: "Hershey, Pennsylvania, United States",
      attractionsNumber: "76",
      water: "YES (2)",
      image:
        "https://en.wikipedia.org/wiki/Hersheypark#/media/File:HersheyParkLogo.png ",
      deaths: 36,
      likes: 7,
      id: 105,
    },

    {
      name: "Cedar Point",
      hours:
        "Monday: 10 AM- 5 PM Tuesday: 10 AM- 5 PM Wednesday: 10 AM- 5 PM Thursday: 10 AM- 5 PM Friday: 9 AM- 9 PM Saturday/Sunday: 9 am - 9 PM",
      location: "Sandusky, Ohio, United States",
      attractionsNumber: "72",
      water: "YES (3)",
      image:
        "https://en.wikipedia.org/wiki/Cedar_Point#/media/File:2017_Cedar_Point_Logo.svg ",
      deaths: 6,
      likes: 52,
      id: 106,
    },

    {
      name: "Silver Dollar City",
      hours:
        "Monday: 9 AM-7 PM Tuesday: 9 AM-7 PM Wednesday: 9 AM-7 PM Thursday: 9 AM-7 PM Friday: 9 AM-8 PM Saturday/Sunday: 7 AM- 7 PM",
      location: "Branson, Missouri, United States",
      attractionsNumber: "31",
      water: "YES (4)",
      image:
        "https://en.wikipedia.org/wiki/Silver_Dollar_City#/media/File:Silver_Dollar_City_logo.png ",
      deaths: 5,
      likes: 44,
      id: 107,
    },

    {
      name: "Sesame Place",
      hours:
        "Monday: 9 AM-7 PM Tuesday: 9 AM-7 PM Wednesday: 9 AM-7 PM Thursday: 9 AM-7 PM Friday: 9 AM-10 PM Saturday/Sunday: Noon- 10 PM",
      location: "Middletown Township, Pennsylvania, United States",
      attractionsNumber: "27",
      water: "YES (9)",
      image:
        "https://en.wikipedia.org/wiki/Sesame_Place_(Philadelphia)#/media/File:Sesame_place_logo.png ",
      deaths: 18,
      likes: 18,
      id: 108,
    },
  ];

  console.log(parks);

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/allparks"
            component={(props) => <ParksList {...props} parks={parks} />}
          />
          <Route
            path="/allparks/:id"
            component={(props) => <ParkDetails {...props} PASSPARKSDATA />}
          />
          {/* <Route path="/new" component={(props) => <AddParksPage {...props} newPark={newPark} handleChange={handleChange} addBoat={addBoat}/>} */}
        </Switch>
      </main>
    </div>
  );
}

export default App;
