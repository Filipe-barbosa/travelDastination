import styled from "styled-components";

 export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  justify-content: flex-start;
  padding: 1rem;
  .title{
    display: flex;
    font-weight: 500;
    font-size: large;
  }
  .subtitle{
    display: flex;
    font-weight: 300;
    font-size: medium;
  }

  .row-information{
    display: flex;
    font-size: small;
    gap: 0.5rem;
  }

  .section{
    display: flex;
    font-weight: 800;
  }

  .section-value{
    display: flex;
    font-weight: 400;
  }
`;
