import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import SearchBar from "./components/searchBar";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
      </header>
    </div>
  );
}

export default App;
