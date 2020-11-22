import React, { useEffect, useState } from 'react';
import './ItemDetails.css';
import { Loading } from '../../assets/Loading/Loading';

export const ItemDetails = ({ itemId, getData, imageURL, children }) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const updateItem = () => {
    if (!itemId) return
    setLoading(true);
    getData(itemId).then((res) => {
      setItem(res)
      setLoading(false)
    })
  }
  useEffect(() => {
    updateItem()
  }, [itemId])
  const noDetails = !item && !loading ? <NoDetails /> : null;
  const loadingBlock = loading ? <Loading /> : null;
  const content = item && !loading ? <Content item={item} imageURL={imageURL} children={children} /> : null;
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
    <div>select an item from the list</div>
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
          {
            React.Children.map(children, (child, i) => {
              return React.cloneElement(child, { item })
            })
          }
        </ul>
      </div>
    </>
  )
}
export const Record = ({ item, field, label }) => {
  return (
    <li className='list-group-item'>
      <span className='term'>{label}:</span>
      <span>{item [field]}</span>
    </li>
  )
}