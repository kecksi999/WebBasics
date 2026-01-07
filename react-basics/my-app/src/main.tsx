import ReactDOM from "react-dom/client";
import "./index.css";
import Traffic from "./components/Traffic";

const App = () => {
  return <Traffic />;
};

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(<App />);
