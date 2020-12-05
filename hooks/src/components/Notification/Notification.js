import React, { useState, useEffect } from 'react';
import './Notification.css';

export const Notification = () => {
  const [showNotification, setShowNotification] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowNotification(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
    {showNotification && <div className='notification'>
      Notification
    </div>}
    </>

  )
}