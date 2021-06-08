import './App.css';
import ListCharacters from './containers/list-characters/list-characters';
import Header from './components/Header/header';
import Search from './components/Search/search';
import Comics from './containers/comics-by-id/comics-by-id';
import { Provider } from 'react-redux'
import generateStore from "./redux/store";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const store = generateStore()
  return (
    <Router>
      <Provider store={store}>
        <Header>
          <Search/>
        </Header>
        <ListCharacters/>
          <Switch>
            <Route path="/comics/:id">
              <Comics/>
            </Route>
            <Route path="/comic/:id">
              <Comics/>
            </Route>
          </Switch>
        
      </Provider>
    </Router>
  );
}

export default App;
