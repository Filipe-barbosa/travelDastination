import styled from "styled-components";
import { Autocomplete  as MuiAutoComplete} from "@mui/material";


export const Container = styled.div`
display: flex;
width: 50%;
padding: 3rem;
background-color: #dcdcdf;
flex-direction: column;
gap: 1rem;
border-radius: 24px;
`

 export const Autocomplete = styled(MuiAutoComplete)`
  background-color: white;
  border-radius: 10px;
  & .MuiAutocomplete-inputRoot {
    padding: 8px; 
  }

  & .MuiOutlinedInput-root {
    border-radius: 10px;
  }

  &.Mui-focused {
    border-color: gray;
  }

  & .MuiAutocomplete-inputRoot:hover {
    border-color: gray;
  }

  & .MuiAutocomplete-inputRoot.Mui-focused {
    border-color: gray;
  }
`;