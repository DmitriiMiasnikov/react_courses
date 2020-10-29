import React from 'react';

export const TodoListItem = ({ item, important }) => {

  const styles = {
    color: important ? 'red' : 'black'
  }

  return (
    <span style={styles}>{item}</span>
  )
}