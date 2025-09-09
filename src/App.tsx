// import './App.css';

import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { PageGermany } from './components/PageGermany';
import { PageFrance } from './components/PageFrance';
import { PageSpain } from './components/PageSpain';

function App() {
  return (
    <div className="App">
      <h1>Travel Info Site</h1>
      <p>Welcome to the Site!</p>

      <nav>
        <NavLink to="/germany">Germany</NavLink>
        <NavLink to="/france">France</NavLink>
        <NavLink to="/spain">Spain</NavLink>
      </nav>

      <Routes>
        <Route path="/germany" element={<PageGermany />}></Route>
        <Route path="/france" element={<PageFrance />}></Route>
        <Route path="/spain" element={<PageSpain />}></Route>
        {/* <Route path="/" element={<PageGermany />}></Route> OR the following for the default page => even without replace*/}
        <Route path="/" element={<Navigate to="/france" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
