import { Routes, Route } from "react-router-dom"
import './App.css';
import Feature from './Pages/Features/Feature'

console.log('checking husky');

function App() {
  return (
    <div>
      <Routes>
        <Route path="/feature" element={ <Feature/> } />
      </Routes>
    </div>
  );
}

export default App;
