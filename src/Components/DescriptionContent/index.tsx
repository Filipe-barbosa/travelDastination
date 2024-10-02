import { Container } from './styles';
import { useLocationContext } from '@/hooks/useLocationContext';

const DescriptionContainer = () => {
  const { selectedOption } = useLocationContext();
  return (
    <Container>
      <div className="title">{selectedOption?.name}</div>
      <div className="subtitle">{selectedOption?.description}</div>
      <div className="row-information">
        <div className="section">Country:</div>
        <div className="section-value">{selectedOption?.country} </div>
      </div>
      <div className="row-information">
        <div className="section">Climate:</div>
        <div className="section-value">{selectedOption?.climate} </div>
      </div>
      <div className="row-information">
        <div className="section">Currency:</div>
        <div className="section-value">{selectedOption?.currency} </div>
      </div>
    </Container>
  );
};

export default DescriptionContainer;
