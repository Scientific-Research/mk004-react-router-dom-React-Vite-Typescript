import { NavLink, Route, Routes } from 'react-router-dom';

export const PageFrance = () => {
  return (
    <>
      <p>Welcome to the France page.</p>

      <nav>
        <NavLink to="/Paris">Paris</NavLink>
        <NavLink to="/Bordeaux">Bordeaux</NavLink>
        <NavLink to="/Cannes">Cannes</NavLink>
      </nav>

      <Routes>
        <Route></Route>
      </Routes>
    </>
  );
};
