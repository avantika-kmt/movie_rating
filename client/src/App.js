import logo from './logo.svg';
import './App.css';
import MovieList from "./components/MovieList.js";
import "./components/Movie.css"

function App() {
  return (
    <div className="App">
    <h1>Movie Rating website</h1>
      <MovieList/>
    </div>
  );
}

export default App;
