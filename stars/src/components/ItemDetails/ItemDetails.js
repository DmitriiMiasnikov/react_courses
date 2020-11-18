import React, { useEffect, useState } from 'react';
import './ItemDetails.css';
import { Loading } from '../../assets/Loading/Loading';

export const ItemDetails = ({ selectedItem, getData, children }) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const updateItem = () => {
    if (!selectedItem) return
    getData.item(selectedItem).then((res) => {
      setItem(res)
      setLoading(false)
    })
  }
  useEffect(() => {
    setLoading(true)
    updateItem()
  }, [selectedItem])

  const noDetails = !item ? <NoDetails /> : null;
  const loadingBlock = loading && !noDetails ? <Loading /> : null;
  const content = item && !loading ? <Content item={item} imageURL={getData.imageURL} children={children} /> : null;
  return (
    <div className={noDetails || loadingBlock ? 'item-details card center' : 'item-details card'}>
      {loadingBlock}
      {content}
      {noDetails}
    </div>
  )
}
const NoDetails = () => {
  return (
    <div>selsect a item from the list</div>
  )
}
const Content = ({ item, imageURL, children }) => {
  return (
    <>
      <img className='item-image' alt={imageURL}
        src={`https://starwars-visualguide.com/assets/img/${imageURL}/${item.id}.jpg`} />
      <div className='card-body'>
        <h4>
          {item.name}
        </h4>
        <ul className='list-group list-group-flush'>
          {children}
        </ul>
      </div>
    </>
  )
}
export const Record = ({ field, label }) => {
  return (
    <li className='list-group-item'>
      <span className='term'>{label}:</span>
      <span>{field}</span>
    </li>
  )
}