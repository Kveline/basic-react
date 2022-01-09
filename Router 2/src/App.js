import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./Pages/AllQuotes";
import NewQuotes from "./Pages/NewQuotes";
import QuoteDetail from "./Pages/QuoteDetail";

function App() {
  return (
    <Switch>
      {/* redirect */}
      <Route path="/" exact>
        <Redirect to="/quotes" />
      </Route>

      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>

      <Route path="/quotes/:id">
        <QuoteDetail />
      </Route>

      <Route path="/new-quote">
        <NewQuotes />
      </Route>
    </Switch>
  );
}

export default App;
