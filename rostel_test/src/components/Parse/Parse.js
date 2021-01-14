import React, { useEffect, useState } from 'react';
import json from './../../assets/Json.txt';
import './Parse.css';

export const Parse = () => {
  const [text, setText] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(json)
      const text = await res.text()
      setText(JSON.parse(text)[0]);
    }
    fetchData()
  }, []);
  return (
    <div className='parse'>
      <ul className='tax'>
      {text && text.tax.map((item, i) => {
        return (
          <li key={i}>
            {item}
          </li>
        )
      })}
      </ul>
      <div dangerouslySetInnerHTML={{__html: text.text }}>
      </div>
    </div>
  )
}