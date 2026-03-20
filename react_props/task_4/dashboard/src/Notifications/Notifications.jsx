import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import './Notifications.css';
import closeButton from '../assets/close-button.png';

function Notifications({ notifications = [] }) {
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        {notifications.map((notif) => (
          <NotificationItem
            key={notif.id}
            type={notif.type}
            value={notif.value}
            html={notif.html}
          />
        ))}
      </ul>
      <button aria-label="Close" onClick={handleClick}>
        <img src={closeButton} alt="close" style={{ width: '13px', height: '10px' }} />
      </button>
    </div>
  );
}

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
      html: PropTypes.shape({ __html: PropTypes.string }),
    })
  ),
};

export default Notifications;