import logo from "./logo.svg";
import "./App.scss";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import { Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
