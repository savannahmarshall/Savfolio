import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
// Import components used in Layout if needed
// import Header from './components/Header';
// import Footer from './components/Footer';

// placeholder component for testing
const TestPage = () => <div>Test Page</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TestPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
