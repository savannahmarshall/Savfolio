import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ContactPage from './components/Contact';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio'; 
import Resume from './components/Resume';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<AboutMe />} />
          <Route path="/contact" element={<ContactPage />} /> 
          <Route path="/portfolio" element={<Portfolio />} /> 
          <Route path="/resume" element={<Resume />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
