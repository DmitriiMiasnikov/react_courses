import React, { useEffect, useState } from 'react';
import './ItemList.css';
import { Loading } from './../../assets/Loading/Loading'
import { swapi } from './../../Servises/swapiServises'

export const ItemList = ({ itemList }) => {
  const [peopleList, setPeopleList] = useState([]);

  // useEffect(() => {
  //   swapi.getAllPeople().then((res) => {
  //     setPeopleList(res)
  //   })
  // })
  if (!peopleList) {
    return <Loading />
  }
  return (
    <div>
      <ul className='item-list list-group'>
        {
          itemList.map((el, i) => {
            return <li key={i} className='list-group-item'><a href='#'>{el}</a></li>
          })
        }
      </ul>
    </div>
  )
}