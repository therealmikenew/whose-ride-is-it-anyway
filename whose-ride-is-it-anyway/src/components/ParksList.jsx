import React from 'react'

export default function ParksList() {
    return (
         <div>(
        <h6>List of Parks</h6>



       {props.parksArr.map((park) => (
        <div className="park-card" onClick={() => showPark(park)}>
          <img style={{ display: "block" }} src={park.img} alt={park.name} />
          <h3>{park.name}</h3>
          <p>Likes: {park.likes}</p>
          <button>LIKE ICON</button>
          <p>Deaths: {park.deaths}</p>
        </div>
      ))}


            
    </div>
     )
}
