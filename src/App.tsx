import './App.css';
import RootContainer from './Components/RootContainer';
import { LocationProvider } from './hooks/useLocationContext';

function App() {
  return (
    <LocationProvider>
      <RootContainer />
    </LocationProvider>
  );
}

export default App;
