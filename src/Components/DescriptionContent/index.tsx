import { Container } from './styles';
import { useLocationContext } from '@/hooks/useLocationContext';
import { Location } from '@/Interfaces/location';

const DescriptionContainer = () => {
  const { selectedOption, buttonOption } = useLocationContext();
  const renderOption: Location | null = buttonOption
    ? buttonOption
    : selectedOption;
  return (
    <Container>
      <div className="title">{renderOption?.name}</div>
      <div className="subtitle">{renderOption?.description}</div>
      <div className="row-information">
        <div className="section">Country:</div>
        <div className="section-value">{renderOption?.country} </div>
      </div>
      <div className="row-information">
        <div className="section">Climate:</div>
        <div className="section-value">{renderOption?.climate} </div>
      </div>
      <div className="row-information">
        <div className="section">Currency:</div>
        <div className="section-value">{renderOption?.currency} </div>
      </div>
    </Container>
  );
};

export default DescriptionContainer;
