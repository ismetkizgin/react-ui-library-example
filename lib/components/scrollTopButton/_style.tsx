import styled from 'styled-components';

export const ScrollTopButtonBase = styled.div`
  position: fixed;
  width: 60px;
  height: 60px;
  background-color: #242424;
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  bottom: 16px;
  right: 16px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  display: flex;

  &:hover {
    box-shadow: #ff014f 0px 5px 15px;
  }
`;

export const ArrowUpIcon = styled.span`
  color: #007bff;
  font-size: 24px;
`;
