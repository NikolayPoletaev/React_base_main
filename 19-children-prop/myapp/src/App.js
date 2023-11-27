import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h2>Text inside of the Wrapper</h2>
        <button>Click me!</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Another text</h2>
        <p>Some description</p>
        <input type="text" placeholder="Enter value"/>
        </Wrapper>
      <Wrapper color="blue">
        <h2>Kolya</h2>
        <p>Plohoi</p>
        <input type="email" placeholder="Enter email"/>
        </Wrapper>
      <Wrapper color="red">
        <h2>Horosho</h2>
        <p>opozdal</p>
        <input type="text" placeholder="Enter value"/>
      </Wrapper>
    </div>
  );
}

export default App;
