
import './App.css';
import { Functions } from './components/functions/functions';
import { Header } from './components/header/header';
import { MapZones } from './components/mapzones/mapzones';
import { ZonesPricing } from './components/zonesPricing/zonesPricing';

function App() {
  return (
    <div className="App">
      <Header/>
      <Functions/>
      <ZonesPricing/>
      <MapZones/>
    </div>
  );
}

export default App;
