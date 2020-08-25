import styled from 'styled-components';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/prefer-default-export
export const StyledLink = styled(Link)`
  color: dimgray;
  margin: 10px 1rem;
  :hover {
    text-decoration: none;
    color: black;
  }
    &.logo{
      font-size: 1.8em;
      color: black;
      letter-spacing: 2px;
      font-weight: 500;
      margin-right: 5%;
    }
`;
