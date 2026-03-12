import "./Notifications.css";
import { getLatestNotification } from "./utils";

function Notifications() {
    const closeButtonPath = `${import.meta.env.BASE_URL}close-button.png`;

    const handleClick = () => {
        console.log("Close button has been clicked");
    };

    return (
        <div className="Notifications">
            <button
                type="button"
                aria-label="Close"
                style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    position: "absolute",
                    right: "10px",
                    top: "10px",
                }}
                onClick={handleClick}
            >
                <img
                    src={closeButtonPath}
                    alt="Close button"
                    style={{ height: "10px", width: "10px" }}
                />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li
                    data-priority="urgent"
                    dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
                />
            </ul>
        </div>
    );
}

export default Notifications;
