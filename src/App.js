import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import AppRoutes from './Routes/AppRoutes';

function App() {
  return (


    <div className="App">
      <Navigation />
      <div className='appRoutes' >
        <AppRoutes />
      </div >

    </div>
  );
}

export default App;
