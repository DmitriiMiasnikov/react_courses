import React, { useContext, useState } from 'react';
import { Context } from './../../App'

export const Person = () => {
  const value = useContext(Context);
  const [person, setPerson] = useState(value.personName)
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