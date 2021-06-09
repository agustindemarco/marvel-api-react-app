import './App.css';
import ListCharacters from './containers/list-characters/list-characters';
import Header from './components/Header/header';
import Search from './components/Search/search';
import Comics from './containers/comics-by-id/comics-by-id';
import ComicDetail from './components/Comic-detail';
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
          <Switch>
            <Route path="/comics/:id" exact>
              <Comics/>
            </Route>
          </Switch>
          <Switch>
            <Route path="/comic/:id" exact>
              <ComicDetail/>
            </Route>
          </Switch>
          <Switch>
            <Route path="/">
              <ListCharacters/>
            </Route>
          </Switch>
        
      </Provider>
    </Router>
  );
}

export default App;
