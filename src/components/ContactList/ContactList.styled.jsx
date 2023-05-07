import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 20px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Button = styled.button`
cursor: pointer;
display: flex;
gap: 5px;
justify-content: center;
align-items: center;
` 