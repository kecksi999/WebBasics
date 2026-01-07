import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Todo from "./components/Todo";
import Counter from "./components/Counter";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/p2">Page 2</Link>
      </nav>
      <Switch>
        <Route
          path="/"
          exact
          component={() => (
            <Todo
              name="Beispiel Todo"
              kommentar="Das ist ein Beispielkommentar."
            />
          )}
        />
        <Route
          path="/p2"
          component={() => <Counter name={"Freaky"} number={2} />}
        />
      </Switch>
    </Router>
  );
};

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(<App />);
