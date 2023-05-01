import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';

function Container() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
export default Container;
