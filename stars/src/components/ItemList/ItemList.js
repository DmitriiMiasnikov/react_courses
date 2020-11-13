import React, { useEffect, useState } from 'react';
import './ItemList.css';
import { Loading } from './../../assets/Loading/Loading';
import { swapi } from './../../Servises/swapiServises';

export const ItemList = ({ onPersonSelected }) => {
  const [peopleList, setPeopleList] = useState(null);
  useEffect(() => {
    swapi.getAllPeople().then((res) => {
      setPeopleList(res)
    })
  }, [])
  const loading = !peopleList ? <Loading /> : null;
  const content = peopleList ? <Content peopleList={peopleList} onPersonSelected={onPersonSelected}/> : null;
  return (
    <div>
      <ul className='item-list list-group'>
        {loading}
        {content}
      </ul>
    </div>
  )
}

const Content = ({ peopleList, onPersonSelected }) => {
  return (
    peopleList.map((el, i) => {
      return <li key={i} className='list-group-item' onClick={() => onPersonSelected(el.id)}><a href='#'>{el.name}</a></li>
    })
  )
}