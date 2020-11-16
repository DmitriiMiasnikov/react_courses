import React, { useEffect, useState } from 'react';
import './ItemList.css';
import { Loading } from './../../assets/Loading/Loading';
import { swapi } from './../../Servises/swapiServises';

export const ItemList = ({ onPersonSelected, itemList, loading }) => {
  const [list, setList] = useState(null);
  useEffect(() => {
    swapi.getAllPeople().then((res) => {
      setList(res)
    })
  }, [])
  useEffect(() => {
    setList(itemList)
  }, [itemList])
  const loadingBlock = loading ? <Loading /> : null;
  const content = !loading ? <Content list={list} onPersonSelected={onPersonSelected}/> : null;
  return (
    <div>
      <ul className='item-list list-group'>
        {loadingBlock}
        {content}
      </ul>
    </div>
  )
}

const Content = ({ list, onPersonSelected }) => {
  return (
    list.map((el, i) => {
      return <li key={i} className='list-group-item' onClick={() => onPersonSelected(el.id)}><a href='#'>{el.name}</a></li>
    })
  )
}