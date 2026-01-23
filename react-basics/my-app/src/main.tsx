import ReactDOM from "react-dom/client";
import "./index.css";
import PersonInterface from "./components/PersonInterface";

const App = () => {
  return <PersonInterface />;
};

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(<App />);






/*
import ReactDOM from "react-dom/client";
import "./index.css";
import Traffic from "./components/Traffic";

const App = () => {
  return <Traffic />;
};

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(<App />);
*/
