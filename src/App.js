import './App.css';
import RandomCharacters from './containers/random-characters/random-characters';
import Header from './components/Header/header';
import Search from './components/Search/search';


function App() {
  return (
    <div className="App">
      <Header>
        <Search/>
      </Header>
      <RandomCharacters/>
    </div>
  );
}

export default App;
