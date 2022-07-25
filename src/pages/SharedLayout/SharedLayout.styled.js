import styled from 'styled-components';

export const Main = styled.main`
  height: 100vh;
`;

export const Header = styled.header`
  font-size: 32px;
  color: '#010101';
  > nav {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 18px;
    > a {
      display: block;
    }
  }
`;
