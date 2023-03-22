import './App.css';
import { useJsApiLoader } from '@react-google-maps/api';
import Burger from './components/Burger/Burger';
import HeaderApp from './components/Header/HeaderApp';
import Hero from './components/Hero/Hero';
import Ingridients from './components/Ingridients/Ingridients';
import Story from './components/Story/Story';
import Map from './components/Map/Map';
import './styles/styles.scss'
import Footer from './components/Footer/Footer';

const API_KEY = 'AIzaSyDoLFYQb3VXaNoXru42OjHvAgu4aTtavYw';


const defaultCenter = {
  lat: 46.523,
  lng: 6.632
};
function App() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
    libraries: ['places']
  })
  return (
    <div className='app'>
      <HeaderApp />
      <Hero />
      <Ingridients />
      <Story />
      <Burger />
      {isLoaded ? <Map center={defaultCenter} /> : <h2>Loading...</h2>}
      <Footer />
    </div>
  );
}

export default App;
