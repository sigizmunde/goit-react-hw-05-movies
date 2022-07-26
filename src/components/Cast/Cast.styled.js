import styled from 'styled-components';

export const CastList = styled.ul`
  & li:not(:last-child) {
    margin-bottom: 36px;
  }
  & img {
    max-height: 250px;
  }
  & h3 {
    margin-top: 12px;
    margin-bottom: 8px;
  }
  & p {
    margin-top: 0;
    margin-bottom: 8px;
  }
`;
