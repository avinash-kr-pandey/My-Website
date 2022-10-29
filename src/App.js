import './App.css';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import News from './Components/News';
import About from './Components/About';
import Contact from './Components/Contact'
import Navigation from './Components/Navigation';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
