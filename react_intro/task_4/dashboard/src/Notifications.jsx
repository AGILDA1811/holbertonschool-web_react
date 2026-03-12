import "./Notifications.css";

function Notifications() {
  return (
    <div className="notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent">Urgent requirement - complete by EOD</li>
      </ul>
    </div>
  );
}

export default Notifications;