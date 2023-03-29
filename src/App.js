import './App.css';
import { useState } from "react";
import { useJsApiLoader } from '@react-google-maps/api';
import Burger from './components/Burger/Burger';
import HeaderApp from './components/Header/HeaderApp';
import Hero from './components/Hero/Hero';
import Ingridients from './components/Ingridients/Ingridients';
import Story from './components/Story/Story';
import Map from './components/Map/Map';
import './styles/styles.scss'
import Footer from './components/Footer/Footer';
import { menu } from './data/data';
import Modal from './components/Modal/Modal';
import OrderPage from './components/OrderPage/OrderPage';


const API_KEY = process.env.REACT_APP_API_KEY;



const defaultCenter = {
  lat: 46.523,
  lng: 6.632
};

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [showOrderPage, setShowOrderPage] = useState(true);
  const openModal = (id) => {
    let burger = menu.filter(item => item.id === id);
    setModalContent(...burger);
    setModalActive(true)
    setShowOrderPage(false);
  }
  const closeModal = () => {
    setModalActive(false);
    setShowOrderPage(false);
    setModalContent({});
  }
  const openOrder = () => {
    setModalActive(true)
    setShowOrderPage(true);
  }


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,

  })

  return (
    <div className='app'>
      <HeaderApp openOrder={openOrder} />
      <Hero />
      <Ingridients />
      <Story />
      <Burger openModal={openModal} openOrder={openOrder} />
      {isLoaded ? <Map center={defaultCenter} /> : <h2>Loading...</h2>}
      <Footer />
      <Modal active={modalActive} setActive={setModalActive} handleClose={closeModal}>
        {showOrderPage ? (<OrderPage data={menu} />) : (<div className="menu_item">
          <h3 className='menu_title'>{modalContent.title} </h3>
          <div className='menu_imgwrapper'>
            <img className='menu_img' src={modalContent.imgurl} alt={modalContent.title} />
          </div>
          <div className="modal_info">{modalContent.description}</div>
        </div>)
        }
      </Modal>
    </div>
  );
}

export default App;
