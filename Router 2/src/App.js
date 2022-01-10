import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./Pages/AllQuotes";
import NewQuotes from "./Pages/NewQuotes";
import QuoteDetail from "./Pages/QuoteDetail";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        {/* redirect */}
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>

        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>

        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>

        <Route path="/new-quote">
          <NewQuotes />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
