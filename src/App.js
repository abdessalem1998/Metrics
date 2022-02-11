import { Route, Routes } from 'react-router-dom';
import Home from './components/Homepage/home';
import Details from './components/Details/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/*" element={<Details />} />
      </Routes>

    </div>
  );
}

export default App;
