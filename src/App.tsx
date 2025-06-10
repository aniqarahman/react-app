import Message, { Center } from './Pages/Message';
import SearchBar from './Pages/SearchBar';
import MostSearchedBrands from './Pages/MostSearchedBrands';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #1e1e1e, #2d2d2d)',
      minHeight: '100vh',
      padding: '40px',
      fontFamily: "'Trebuchet MS', sans-serif"
    }}>
      <Router><Message />
      <SearchBar />
      <MostSearchedBrands /></Router>
    </div>
  );
}

export default App;