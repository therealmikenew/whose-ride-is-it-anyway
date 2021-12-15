import React from 'react'

function Home(props) {
  console.log(props);
  return (
    <div className='homePage'>
      <div>
        <img 
        style={{  display: 'center', maxWidth: '50%',  border:'solid 5px rgb(98, 195, 164)'}}
        src="https://usercontent.one/wp/www.chernobyl.one/wp-content/uploads/2020/05/Swimming-City-Park-08.jpg"
        alt="park"
        />
      </div>
      <h2 style={{ color: 'rgb(193, 29, 37)' }}> Your one stop shop for Amusement Parks and their body counts! </h2>
    </div>
  )
}

export default Home;