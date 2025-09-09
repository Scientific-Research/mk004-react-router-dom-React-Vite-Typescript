import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { PageTiergarten } from './PageTiergarten';
import { PageSteglitz } from './PageSteglitz';
import { PageMitte } from './PageMitte';

export const PageBerlin = () => {
  return (
    <>
      <p>Welcome to the Berlin page.</p>

      <nav>
        <NavLink to="tiergarten">Tiergarten</NavLink>
        <NavLink to="steglitz">Steglitz</NavLink>
        <NavLink to="mitte">Mitte</NavLink>
      </nav>

      <Routes>
        <Route path="tiergarten" element={<PageTiergarten />}></Route>
        <Route path="steglitz" element={<PageSteglitz />}></Route>
        <Route path="mitte/*" element={<PageMitte />}></Route>

        {/* <Route path="/" element={<Navigate to="mitte" />}></Route> */}
      </Routes>
    </>
  );
};
