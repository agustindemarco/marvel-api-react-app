import './App.css';
import ListCharacters from './containers/list-characters/list-characters';
import Header from './components/Header/header';
import Comics from './containers/comics-by-id/comics-by-id';
import ComicDetail from './containers/comic-detail';
import { Provider } from 'react-redux'
import generateStore from "./redux/store";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


function App() {
  const store = generateStore()
  return (
    <Router>
      <Provider store={store}>
        <Header/>
        <Redirect
            from="/"
            to="/home" />
          <Switch>
            <Route path="/home" strict>
              <ListCharacters/>
            <Route path="/home/comics/:id" component={Comics}/>
            </Route>
          </Switch>
          <Switch>
            <Route strict path="/comic/:id" exact>
              <ComicDetail/>
            </Route>
          </Switch>
      </Provider>
    </Router>
  );
}

export default App;
