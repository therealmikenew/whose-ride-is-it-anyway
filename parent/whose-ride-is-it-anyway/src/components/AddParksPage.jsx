import React from 'react'

export default function AddParksPage(props) {

    const handleSubmit = (e) => {
        props.addPark(e)
        props.history.push('/allparks')

    }

    const newPark = props.newPark;

    console.log(newPark)

    
        return (
        <div>
        <h1>Add a New Park!</h1>
        <form onSubmit={handleSubmit}>
        <input
          type="text-area"
          value={newPark.name}
          onChange={props.handleNewPark}
          name={"name"}
          placeholder={"name"}
        />
         <input
          type="text-area"
           value={newPark.location}
          
          onChange={props.handleNewPark}
          name={"location"}
          placeholder={"location"}
        />
        <input
          type="text-area"
          value={newPark.image}
          onChange={props.handlePark}
          name={"image"}
          placeholder={"image"}
        />
       
        
        <button>Submit</button>
      </form>
            
        </div>
    )
}

