import './assets/tailwind.css'
import Click from './components/click';
import ClickLoading from './components/clickLoading';


function App() {
  return (
    <div className="App grid grid-cols-4">
      <Click />
      <ClickLoading />
    </div>
  );
}

export default App;
