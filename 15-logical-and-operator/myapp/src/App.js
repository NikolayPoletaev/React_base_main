import { useState } from 'react'
import './App.css';
import Counter from './component/Counter';
import Button from './component/Button';

function App() {
  console.log(App.render)
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }
  const resetCount = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <Counter countProps={count}/>
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      {count > 0 && (
        <div>
          <button
          style={{ backgroundColor: 'lightgreen'}}
          onClick={resetCount}
          >Reset</button>
        </div>
      )}
    </div>
  );
}

export default App;
