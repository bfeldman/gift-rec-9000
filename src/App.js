import React, { useState, useEffect } from 'react'
import Faker from 'faker'
import pluralize from 'pluralize'

function App() {
  const [descriptor, setDescriptor] = useState("")
  const [person, setPerson] = useState("")
  const [activity, setActivity] = useState("")
  
  useEffect(() => {
    getWords()
  }, [])
  
  const getWords = () => {
    setDescriptor(Faker.commerce.productAdjective())
    setPerson(Faker.name.jobTitle())
    setActivity(pluralize(Faker.hacker.verb()).replace(/^\w/, c => c.toUpperCase()) + " " + pluralize(Faker.hacker.noun()).replace(/^\w/, c => c.toUpperCase()))
  }

  return (
    <div>
      <h1>Best <em>{descriptor}</em> Gifts For Your <em>{person}</em> Who <em>{activity}</em></h1>
      <button onClick={() => getWords()}>refresh</button>
    </div>
  )
}

export default App;


