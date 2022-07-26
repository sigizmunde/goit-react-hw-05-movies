import styled from 'styled-components';

export const MovieCard = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 24px;
  & img {
    max-height: 370px;
    max-width: 250px;
  }

  & span:not(:last-child) {
    margin-right: 12px;
  }
`;

export const Div = styled.div`
  font-size: 15px;
`;

export const Content = styled.div`
  margin: 24px;
  font-size: 15px;
  & h2 {
    font-size: 24px;
    font-weight: 700;
  }
  & h3 {
    font-size: 18px;
    font-weight: 700;
  }
`;

export const AdditionalInfo = styled.div`
  margin: 0 24px;
  padding-bottom: 105px;
  font-size: 15px;
  & h2 {
    font-size: 24px;
    font-weight: 700;
  }
  & h3 {
    font-size: 18px;
    font-weight: 700;
  }
`;
