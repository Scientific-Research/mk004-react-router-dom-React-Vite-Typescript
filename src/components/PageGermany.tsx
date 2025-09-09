import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { PageHamburg } from './PageHamburg';
import { PageHannover } from './PageHannover';
import { PageBerlin } from './PageBerlin';

export const PageGermany = () => {
  return (
    <>
      <p>Welcome to the Germany page.</p>

      <nav>
        <NavLink to="hamburg">Hamburg</NavLink>
        <NavLink to="hannover">Hannover</NavLink>
        <NavLink to="berlin">Berlin</NavLink>
      </nav>

      <Routes>
        <Route path="hamburg" element={<PageHamburg />}></Route>
        <Route path="hannover" element={<PageHannover />}></Route>
        <Route path="berlin/*" element={<PageBerlin />}></Route>
        {/* <Route path="/" element={<PageGermany />}></Route> OR the following for the default page => even without replace*/}
        <Route path="/" element={<Navigate to="berlin" />}></Route>
      </Routes>
    </>
  );
};
