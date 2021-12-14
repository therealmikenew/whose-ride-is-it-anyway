import React from 'react'

function Home(props) {
  console.log(props);
  return (
    <div className='homePage'>
      <div>
        <img 
        style={{ display: 'block', maxWidth: '100%' }}
        src="https://files.slack.com/files-pri/T0351JZQ0-F02QHKSUZ8V/fran-6-flags-16x20.jpg"
        alt="photo"
        />
      </div>
      <h1> Whose Ride is it Anyway?</h1>
      <h2> Your one stop shop for Amusement Parks and knowing how many people died in them! </h2>
    </div>
  )
}

export default Home;