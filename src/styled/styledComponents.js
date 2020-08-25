import styled from 'styled-components';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/prefer-default-export
export const StyledLink = styled(Link)`
  color: dimgray;
  margin: 10px 1.3rem;
  :hover {
    text-decoration: none;
    color: black;
  }
    &.logo{
      font-size: 1.2rem;
      color: black;
    }
`;
