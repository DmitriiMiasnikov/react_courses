import React, { useEffect, useState } from 'react';
import './ItemList.css';
import { Loading } from './../../assets/Loading/Loading';

export const ItemList = ({ onPersonSelected, getData, children }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData().then((itemList) => {
      setList(itemList)
      setLoading(false)
    })
  }, [])

  const loadingBlock = loading ? <Loading /> : null;
  const content = !loading ? <Content list={list} onPersonSelected={onPersonSelected} itemText={children}/> : null;
  return (
    <div>
      <ul className='item-list list-group'>
        {loadingBlock}
        {content}
      </ul>
    </div>
  )
}

const Content = ({ list, onPersonSelected, itemText }) => {
  return (
    list.map((el, i) => {
      const label = itemText(el)
      return <li key={i} className='list-group-item' onClick={() => onPersonSelected(el.id)}><a href='#'>{label}</a></li>
    })
  )
}