import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Hero from "./pages/hero";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col items-center">
        <Header className="" />
        <Hero />
      </div>
    </div>
  );
}

export default App;
