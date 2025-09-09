import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { PageParis } from './PageParis';
import { PageBordeaux } from './PageBordeaux';
import { PageCannes } from './PageCannes';

export const PageFrance = () => {
  return (
    <>
      <p>Welcome to the France page.</p>

      <nav>
        <NavLink to="paris">Paris</NavLink>
        <NavLink to="bordeaux">Bordeaux</NavLink>
        <NavLink to="cannes">Cannes</NavLink>
      </nav>

      <Routes>
        <Route path="paris" element={<PageParis />}></Route>
        <Route path="bordeaux" element={<PageBordeaux />}></Route>
        <Route path="cannes" element={<PageCannes />}></Route>

        {/* <Route path="/" element={<Navigate to="paris" />}></Route> */}
      </Routes>
    </>
  );
};
