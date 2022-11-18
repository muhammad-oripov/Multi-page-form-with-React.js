import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Name  from './Pages/Name'
import  Rresult  from './Pages/Rresult'
import  Password  from './Pages/Password'
import  Surename  from './Pages/Surename'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Name />} />
        <Route path='/surname' element={<Surename />} />
        <Route path='/password' element={<Password />} />
        <Route path='/result' element={<Rresult />} />
      </Routes>
    </>
  );
}
export default App;