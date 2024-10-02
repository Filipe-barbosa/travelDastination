// @ts-nocheck
import { Container, Autocomplete } from './styles';
import { TextField, Box } from '@mui/material';
import { Location } from '@/Interfaces/location';

import { useLocationContext } from '@/hooks/useLocationContext';

const SearchAutocomplete = () => {
  const { selectedOption, handleSelectedOptionChange, allOptions } =
    useLocationContext();
  const loading = true;
  const handleOptionChange = (event: SyntheticEvent, newValue: Location) => {
    handleSelectedOptionChange(newValue, 'search');
  };

  return (
    <Container>
      Location
      <Autocomplete
        options={allOptions as Location[]}
        autoHighlight
        loading={loading}
        value={selectedOption}
        onChange={handleOptionChange}
        getOptionLabel={(option: Location) => option?.name || ''}
        renderOption={(props, option: Location) => (
          <Box component="li" {...props}>
            {option.name}
          </Box>
        )}
        renderInput={(params) => (
          <TextField {...params} placeholder="Search for a location ..." />
        )}
      />
    </Container>
  );
};

export default SearchAutocomplete;
