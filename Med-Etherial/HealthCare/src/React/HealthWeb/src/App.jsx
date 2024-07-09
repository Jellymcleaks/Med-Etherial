
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar/Navbar';
import Home from './pages/Homepage/Home';
import Schedule from './pages/Schedulepage/Schedules';
import Topbar from './pages/Navbar/Topbar';
import Appointment from './pages/appointment/Appointment';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Topbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule/med-time" element={<Schedule />} />
          {/* <Route path="/Medi" element={<Medicals/>} /> */}
          <Route path="/schedule/appointment" element={<Appointment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

