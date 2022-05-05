import './App.css';
import Checkersboard from './Components/Checkersboard';
import Gamepage from './pages/gamepage';
import HomepageNav from './pages/hompagenav';
import Homepage from './pages/hompagenav';

function App() {
  return (
    <><HomepageNav />
    <div id='app'>
      <Gamepage />
    </div></>
  );
}

export default App;
