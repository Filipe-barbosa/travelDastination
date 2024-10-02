import React, { SyntheticEvent } from 'react';
import { Container, Autocomplete } from './styles';
import { TextField, Box } from '@mui/material';
import { Location } from '@/Interfaces/location';
import options from './options.json';
import { useLocationContext } from '@/hooks/useLocationContext';

const SearchAutocomplete = () => {
  const { selectedOption, setSelectedOption } = useLocationContext();
  const loading = true;
  const handleOptionChange = (
    event: SyntheticEvent,
    newValue: Location | null,
  ) => {
    setSelectedOption(newValue);
  };

  return (
    <Container>
      Location
      <Autocomplete
        options={options as Location[]}
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
