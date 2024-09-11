import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ContactPage from './components/Contact';
import AboutMe from './components/AboutMe';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<AboutMe />} />
          <Route path="/contact" element={<ContactPage />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
