function App(){
  const numbers = [1,6,7,4,9];
  const listItems = numbers.map(number =>
    <li>{number * 2}</li>);

  return <ul>{listItems}</ul>
}

export default App; 
