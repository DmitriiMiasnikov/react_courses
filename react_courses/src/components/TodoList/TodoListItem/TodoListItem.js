import React from 'react';

export const TodoListItem = ({ label, important }) => {
  const styles = {
    color: important ? 'red' : 'black'
  }

  return (
    <span style={styles}>{label}</span>
  )
}