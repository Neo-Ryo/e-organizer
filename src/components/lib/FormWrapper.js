import styled from 'styled-components';
import { device } from './mediaQueries';

export default styled.form`
  display: grid;
  display: -ms-grid;
  display: -moz-grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  height: 80vh;
  width: 600px;
  //media queries here ===>
  /* @media ${device.md}{

  } */
`;
