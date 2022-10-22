import TimeBox from '../timeBox/TimeBox';
import MapBox from '../mapBox/MapBox';
import LocateBox from '../locateBox/LocateBox';
import PeopleBox from '../peopleBox/PeopleBox';

import './app.scss';

const App = () => {
  return (
    <div className='app'>
        <LocateBox/>
        <TimeBox/>
        <MapBox/>
        <PeopleBox/>
    </div>
  );
}

export default App;
