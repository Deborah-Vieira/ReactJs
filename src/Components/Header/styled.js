import styled from "styled-components";

export const Content = styled.div`
  height: 64px;
  width: 100%;
  background: #fff;
  border: 1px solid #aaa;
  border-radius: 4px;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  nav {
    a {
      font-size: 18px;
      font-weight: bold;
      text-decoration: none;
      color: #999;

      /*Não precisa no ultimo item do menu colocar o margin
      right */

      &:not(:last-child) {
        margin-right: 32px;
      }

      &:active {
        color: #444;
      }
    }
  }
`;
