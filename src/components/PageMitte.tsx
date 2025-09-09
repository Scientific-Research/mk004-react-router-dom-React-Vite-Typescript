import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { PageCheckpointCharlie } from './PageCheckpointCharlie';
import { PageBrandenburgGate } from './PageBrandenburgGate';
import { PageUnterdenLinden } from './PageUnterdenLinden';

export const PageMitte = () => {
  return (
    <>
      <p>Welcome to the Mitte page.</p>

      <nav>
        <NavLink to="checkpointCharlie">Checkpoint Charlie</NavLink>
        <NavLink to="brandenburgGate">Brandenburg Gate</NavLink>
        <NavLink to="unterDenLinden">Unter den Linden</NavLink>
      </nav>

      <Routes>
        <Route
          path="checkpointCharlie"
          element={<PageCheckpointCharlie />}
        ></Route>
        <Route path="brandenburgGate" element={<PageBrandenburgGate />}></Route>
        <Route path="unterDenLinden" element={<PageUnterdenLinden />}></Route>

        {/* <Route path="/" element={<Navigate to="unterDenLinden" />}></Route> */}
      </Routes>
    </>
  );
};
