import './App.css';
import ListCharacters from './containers/list-characters/list-characters';
import Header from './components/Header/header';
import Search from './components/Search/search';
import { Provider } from 'react-redux'
import generateStore from "./redux/store";


function App() {
  const store = generateStore()
  return (
    <Provider store={store}>
      <Header>
        <Search/>
      </Header>
      <ListCharacters/>
    </Provider>
  );
}

export default App;
