import React, { useState } from 'react';
import classnames from 'classnames';

import './TodoListItem.css'

export const TodoListItem = ({ label, important, removeTodo, id }) => {
  const [importantItem, setImportantItem] = useState(important);
  const [done, setDone] = useState(false);
  const setImportantItemHandler = () => {
    setImportantItem(!importantItem)
  }
  const setDoneHandler = () => {
    setDone(!done);
  }
  const styles = {
    color: importantItem ? 'steelblue' : 'black',
    fontWeight: importantItem ? 'bold' : 'normal'
  }
  return (
    <div className={classnames('todo-list-item', { 'done': done })}>
      <button type='button' className='btn btn-outline-success btn-sm float-right' onClick={() => setImportantItemHandler()}>
        <svg width='20' height='20' viewBox="0 0 16 16" className="bi bi-exclamation" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
        </svg>
      </button>
      <button type='button' className='btn btn-outline-danger btn-sm float-right' onClick={() => removeTodo(id)}>
        <svg width='20' height='20' viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
        </svg>
      </button>
      <span className={classnames('todo-list-item-label')} style={styles} onClick={() => setDoneHandler()}>
        {label}
      </span>
    </div>

  )
}