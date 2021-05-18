import styled from 'styled-components';

export default styled.button`
  border: none;
  border-radius: 5px;
  background-color: #254e58;
  color: #88bdbc;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: transparent;
    border: 1px solid #254e58;
    color: #254e58;
    transition: 0.2s;
  }
`;
