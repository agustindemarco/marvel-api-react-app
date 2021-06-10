import "./App.scss";
import ListCharacters from "./containers/list-characters";
import Header from "./components/Header";
import Comics from "./containers/comics-by-id";
import ComicDetail from "./containers/comic-detail";
import { Provider } from "react-redux";
import generateStore from "./redux/store";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const store = generateStore();
  return (
    <Router>
      <Redirect exact from="/" to="/home" />
      <Provider store={store}>
        <Header />
        <Switch>
          <Route path="/home" strict>
            <ListCharacters />
            <Route path="/home/comics/:id" component={Comics} />
          </Route>
        </Switch>
        <Switch>
          <Route strict path="/comic/:id" exact>
            <ComicDetail />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
