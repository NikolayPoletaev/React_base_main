import './App.css';
import RandomNumber from './components/RandomNumber';
import generateRandomNum from './utils/generationRandomNum';

function App() {
  return (
    <div className="App">
      <RandomNumber/>
      <generateRandomNum maxNum = {1000}/>
    </div>
  );
}

export default App;
