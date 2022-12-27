import { BrowserRouter, Switch, Route } from "react-router-dom";
import home from "pages/home/home";
import create from "./pages/create/create";
import search from "./pages/search/search";
import recipe from "./pages/recipe/recipe";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <home />
          </Route>
          <Route exact path="/create">
            <create />
          </Route>
          <Route exact path="/recipes/:id">
            <recipe />
          </Route>
          <Route exact path="/search">
            <search />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
