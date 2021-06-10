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
      <Provider store={store}>
        <Header />
        <Switch>
          <Route path="/home" strict>
            <ListCharacters />
            <Route path="/home/comics/:id" component={Comics} />
          </Route>
          <Route path="/comic/:id" exact>
            <ComicDetail />
          </Route>
          <Redirect to="/home" />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
