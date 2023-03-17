import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./component/pages/home";
import About from './component/pages/about';
import Navbar from './navbar/Navbar';
import Contact from './component/pages/contact';
import Sidebar from './navbar/sidebar/Sidebar';
import Works from './component/pages/works';


function App() {

  return (
    <>
    <Router>
    <Navbar/>
    <Sidebar/>
    <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/works' element={<Works/>} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
