import React from 'react';

import { InformationContainer, Container } from './styles';
import SearchContainer from '../SearchContainer';
import DescriptionContainer from '../DescriptionContent';

const RootContainer = () => {
  return (
    <Container>
      <InformationContainer>
        <SearchContainer />
        <DescriptionContainer />
      </InformationContainer>
    </Container>
  );
};

export default RootContainer;
