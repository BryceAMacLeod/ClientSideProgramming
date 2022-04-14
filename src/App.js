import { Outlet, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React-based Three-in-a-Row Game</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/randomGame">Random Game</Link> |{" "}
        <Link to="/sampleGame">Sample Game</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
