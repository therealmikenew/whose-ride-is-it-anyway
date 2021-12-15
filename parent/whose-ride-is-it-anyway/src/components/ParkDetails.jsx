import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"

function ParkDetails (props) {
  const [selectedPark, setPark] = useState('')
  const [clicked, setClicked] = useState("♡")

  useEffect(() => {
    let selectedPark = props.parkData.find(
      (park) => park.id === parseInt(props.match.params.id)
    )
    setPark(selectedPark)
  }, [])
  
    const handleLikes = () => {
        if (clicked === "♡") {
            setClicked("❤")
            
            selectedPark.likes++
        } else {
            setClicked("♡")
            selectedPark.likes--
        }  
    }

  return selectedPark ? (
    <div className='parkCard'>
      <div className='cardHeader'>
        <img width="250px" src={selectedPark.image} alt='Park Photo' />
        <h2>{selectedPark.name}</h2>
      </div>
      <div className='cardInfo'>
      <h2>Location: {selectedPark.location}</h2>
      <h3>number of attractions: {selectedPark.attractionsNumber}</h3>
      <h3>Water attractions: {selectedPark.waterPark}</h3>
      <h3>Body count: {selectedPark.deaths}</h3>
      <span onClick={handleLikes}>{clicked}</span>
      <h3>Likes: {selectedPark.likes}</h3>
      

      </div>
            <Link to="/allparks">
        <button style={{ background: "gray" }}>Listings</button>
      </Link>
    </div>
  ) : null;
}

export default ParkDetails

