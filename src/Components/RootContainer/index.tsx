import React from 'react';

import { InformationContainer, Container } from './styles';
import SearchContainer from '../SearchContainer';
import DescriptionContainer from '../DescriptionContent';
import NearbyContent from '../NearbyContent';
import { useLocationContext } from '@/hooks/useLocationContext';

const RootContainer = () => {
  const { selectedOption } = useLocationContext();
  return (
    <Container>
      <InformationContainer>
        <SearchContainer />
        {selectedOption && (
          <>
            <DescriptionContainer />
            <NearbyContent />
          </>
        )}
      </InformationContainer>
    </Container>
  );
};

export default RootContainer;
