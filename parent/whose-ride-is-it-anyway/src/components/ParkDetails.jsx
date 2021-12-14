import { useEffect, useState } from 'react';

function ParkDetails (props) {
  const [selectedPark, setPark] = useState('')

  useEffect(() => {
    let selectedPark = props.parks.find(
      (park) => park.id === parseInt(props.match.params.id)
    )
    setPark(selectedPark)
  }, [])
  
  return selectedPark ? (
    <div className='parkCard'>
      <div className='cardHeader'>
        <img src={selectedPark.img} alt='Park Photo' />
        <h1>{selectedPark.name}</h1>
      </div>
      <div className='cardInfo'>
      <h2>where:{selectedPark.location}</h2>
      <h3>number of attractions: {selectedPark.attractionsNumber}</h3>
      <h3>Water attractions: {selectedPark.waterPark}</h3>
      <h3>Bodycount:{selectedPark.deaths}</h3>
      <h3>Likes: </h3>

      </div>
    </div>
  ) : null;
}

export default ParkDetails

/////PseudoCoding

/* 
function parkDetails(){
  use state
}

Return parkPage
<div class parkDetail>
<div park header>
Photo & name
</div header>
<div class info>
pulled info from API-

-max capacity
-hours
-address
-# of rides
-water park y/n
-number of deaths
-likes count (include the ability to change here)
</div parkDetail>

<div class comments section >

</div comments>

*/

//export
