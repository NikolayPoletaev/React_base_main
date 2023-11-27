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

  return (
    <div className="App">
      <Counter countProps={count}/>
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
    </div>
  );
}

export default App;
