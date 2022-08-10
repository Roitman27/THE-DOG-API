import './App.css';
import Table from './components/table';

function getBreedList() 
{  
  fetch('https://api.thedogapi.com/v1/breeds')
      .then(response => response.json())
      .then(data => console.log(data));
}


function App() { 

  const myList =  getBreedList();

  return (
    <div className="App">
      <h1>THE DOG API</h1>       
      <h1>{myList}</h1>
      <Table />
    </div>
  );
}

export default App;