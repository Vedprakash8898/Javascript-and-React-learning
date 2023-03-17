import React from 'react'

function Person({person}) {
  return (
    <div>
    <h2>I am {person.name} . I am {person.age} of age and I am Learning {person.skill}</h2>

    </div>
  )
}

export default Person