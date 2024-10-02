import { Card, NearbySection, Container, ClickableDiv } from './styles';
import { useLocationContext } from '@/hooks/useLocationContext';
import { Location } from '@/Interfaces/location';

const NearbyContent = () => {
  const { handleSelectedOptionChange, closestLocations } = useLocationContext();
  return (
    <Container>
      <div className="title">Nearby Locations</div>
      <NearbySection>
        {closestLocations?.map((item: Location, index) => (
          <ClickableDiv
            onClick={() => handleSelectedOptionChange(item, 'button')}
          >
            {<Card key={index}>{item.name}</Card>}
          </ClickableDiv>
        ))}
      </NearbySection>
    </Container>
  );
};
export default NearbyContent;
