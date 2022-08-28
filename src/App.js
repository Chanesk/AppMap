function App(){
  const numbers = [1,6,7,4,9];
  const listItems = numbers.map(number =>
    <li>{number * 2}</li>);

  return <div>
    <p>Voici mon tableau: {numbers}</p>
    <h2>voici le nouveau tableau</h2>
    <ul>{listItems}</ul>
    </div>
}

export default App; 