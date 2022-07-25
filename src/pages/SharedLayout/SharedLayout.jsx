import { NavLink, Outlet } from 'react-router-dom';
import { Header, Main } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Main>
      <Header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="movies">Movies</NavLink>
        </nav>
        <Outlet />
      </Header>
    </Main>
  );
};

export default SharedLayout;
