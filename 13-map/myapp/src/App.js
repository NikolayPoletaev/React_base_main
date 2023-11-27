import { useState } from 'react'
import './App.css';
import Button from './component/Button';
import Counter from './component/Counter';

const text = ['Click me!','Click me pleace!', 'Hit me!', 'Press me!','Нажми меня!','Сюда']
function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <Counter countProps={count}/>
      {text.map((text) => {
        return <Button onClick={incrementCount} text={text} />
      })}
    </div>
  );
}

export default App;
