import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Header, Main, Nav } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Main>
      <Header>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="movies">Movies</NavLink>
        </Nav>
      </Header>
      <Suspense fallback={<section>Loading...</section>}>
        <Outlet />
      </Suspense>
    </Main>
  );
};

export default SharedLayout;
