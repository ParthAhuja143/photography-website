import ScrollAnimation from 'react-animate-on-scroll';
import './App.css';
import About from './components/About/About';
import AlbumSection from './components/AlbumSection/AlbumSection';
import Awards from './components/Awards/Awards';
import Header from './components/Header/Header';
import ImgSwiper from './components/ImgSwiper/ImgSwiper';
import Nav from './components/Nav/Nav';
import { useStateValue } from './StateProvider';
import 'animate.css/animate.min.css'
import ContactForm from './components/ContactForm/ContactForm';


function App() {

  const [state , dispatch] = useStateValue()

  return (
    <div className={`app ${!state.showOverflow && 'overflow_none'}`}>
     <Nav/>
     <Header/>
     <About/>
     <ImgSwiper/>
     <AlbumSection/>
     <Awards/>
     <ContactForm />
    </div>
  );
}

export default App;
