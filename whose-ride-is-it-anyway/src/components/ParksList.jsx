import React, {useState} from 'react'

export default function ParksList() {

    const [clicked, setClicked] = useState("♡")
    const [count, setCount] = useState({park.likes}])

    const handleLikes = () => {

        if (clicked === "♡") {
            setClicked("❤") 
            setCount({park.likes}++)
        } else {
            setClicked("♡")
            setCount({park.likes}++)

        }
        
    }


    return (
         <div>(
        <h6>List of Parks</h6>

       {props.parksArr.map((park) => (
        <div className="park-card" onClick={() => showPark(park)}>
          <img style={{ display: "block" }} src={park.img} alt={park.name} />
          <h3>{park.name}</h3>
          <p>Likes: {count}</p>
          <button onClick={handleLikes}>{clicked}</button>
          <p>Deaths: {park.deaths}</p>
        </div>
      ))}


            
    </div>
     )
}
