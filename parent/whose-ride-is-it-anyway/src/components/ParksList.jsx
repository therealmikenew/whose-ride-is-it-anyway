import React from 'react'
import { Link} from "react-router-dom"

export default function ParksList(props) {

    const showPark = (park) => {
      props.history.push(`/allparks/${park.id}`)
    }


    return (
         <div>

       {props.parkData.map((park) => ( 
          
        <div className="park-card" >
         
          <img width="500px" onClick={() => showPark(park)} src={park.image} alt={park.name} />
          
          <h3 style={{ color: 'rgb(193, 29, 37)' }}>{park.name}</h3>
          <p>Likes: {park.likes}</p>
          
          <p>Deaths: {park.deaths}</p>
        </div>
        
      ))}
      <Link to="/">
        <button style={{ background: "gray" }}>Home</button>
      </Link>


            
    </div>
     )
}
