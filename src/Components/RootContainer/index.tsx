import React from 'react';

import { InformationContainer, Container } from './styles';
import SearchContainer from '../SearchContainer';

const RootContainer = () => {
  return (
    <Container>
      <InformationContainer>
        <SearchContainer />
      </InformationContainer>
    </Container>
  );
};

export default RootContainer;
