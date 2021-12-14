import React, {useState} from 'react'

export default function ParksList(props) {

    const [clicked, setClicked] = useState("♡")
    // const [count, setCount] = useState({park.likes}])

    // const handleLikes = () => {

    //     if (clicked === "♡") {
    //         setClicked("❤") 
    //         setCount({park.likes}++)
    //     } else {
    //         setClicked("♡")
    //         setCount({park.likes}++)

    //     }
        
    // }

    const showPark = (park) => {
      props.history.push(`/listings/${park.id}`)
    }


    return (
         <div>(
        <h6>List of Parks</h6>

       {props.parks.map((park) => (
        <div className="park-card" onClick={() => showPark(park)}>
          <img style={{ display: "block" }} src={park.image} alt={park.name} />
          <h3>{park.name}</h3>
          {/* <p>Likes: {count}</p>
          <button onClick={handleLikes}>{clicked}</button> */}
          <p>Deaths: {park.deaths}</p>
        </div>
      ))}


            
    </div>
     )
}
