import './assets/tailwind.css'
import Click from './components/click';
import ClickLoading from './components/clickLoading';
import Mouse from './components/mouse';


function App() {
  return (
    <div className="App grid px-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <Click />
      <ClickLoading />
      <Mouse />
    </div>
  );
}

export default App;
