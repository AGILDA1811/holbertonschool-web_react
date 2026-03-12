import './App.css'
import Notifications from './Notifications';
import { getCurrentYear, getFooterCopy } from './utils';

function App() {
  const logoPath = `${import.meta.env.BASE_URL}holberton-logo.jpg`;

  return (
    <>
      <Notifications />
      <div className="App-header">
        <img src={logoPath} alt="Holberton logo" />
        <h1>School Dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <button type="button">OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
      </div>
    </>
  );
}

export default App;
