import React, { useState } from 'react';

export const Person = () => {
  const [person, setPerson] = useState({
    firstName: 'Bob',
    lastName: 'Smith'
  })
  const changeName = () => {
    setPerson(n => {
      return { ...n, firstName: n.firstName === 'Dmitrii' ? 'Bob' : 'Dmitrii' }
    });
  }
  return (
    <div style={{ fontSize: '24px', margin: 10 }}>
      <span>{person.firstName} {person.lastName}</span>
      <button onClick={() => changeName()}>change name</button>
    </div>
  )
}