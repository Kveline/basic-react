import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./Pages/AllQuotes";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import React, { Suspense } from "react";
// lazy load component
const NewQuotes = React.lazy(() => import("./Pages/NewQuotes"));
const QuoteDetail = React.lazy(() => import("./Pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./Pages/NotFound"));

function App() {
  return (
    <Layout>
      {/* Suspense for lazy load loading, have to add it!!! */}
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
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

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
