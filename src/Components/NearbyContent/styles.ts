import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;

  gap: 2rem;
  justify-content: flex-start;
  padding: 1rem;
  .title {
    display: flex;
    font-weight: 500;
    font-size: x-large;
  }
`;

export const NearbySection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 1rem;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  text-transform: uppercase;

  padding: 0.5rem;
  background-color: blue;
  border-radius: 0.5rem;
  color: antiquewhite;
  font-weight: 800;
`;

 export const ClickableDiv = styled.div`
  display: flex;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: transparent;
  }
`;

