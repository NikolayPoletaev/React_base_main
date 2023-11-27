import './App.css';
import Info from './component/Info';

function App() {
  return (
    <div className="App">
      <Info />
      <div className="info">
      <h1>App component heading</h1>
      <h2>Heading in the App component</h2>
      <button className="my-button">Click me in the Info component</button>
      </div>
    </div>
  );
}

export default App;
