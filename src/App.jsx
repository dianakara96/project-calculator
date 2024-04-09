import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Calc from './components/Calc';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Calc />} />       
      </Routes>
    </Router>
  );
}


export default App;









