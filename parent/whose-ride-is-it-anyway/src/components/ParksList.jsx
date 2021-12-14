import React from 'react'

export default function ParksList(props) {

    
   

  
    const showPark = (park) => {
      props.history.push(`/allparks/${park.id}`)
    }


    return (
         <div>(
        <h6>List of Parks</h6>

       {props.parks.map((park) => ( 
          
        <div className="park-card" >
         
          <img onClick={() => showPark(park)}style={{ display: "block" }} src={park.image} alt={park.name} />
          <h3>{park.name}</h3>
          <p>Likes: {park.likes}</p>
          
          <p>Deaths: {park.deaths}</p>
        </div>
      ))}


            
    </div>
     )
}
