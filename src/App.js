import Header from './components/Header';
import Homepage from './components/Homepage';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Router>
        <Routes>
          <Route
            path="/cart"
            element={<Cart />}
          />
          <Route
            path="/"
            element={<Homepage />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
