import './App.css';
import Calculator from './component/calculator';
import Contact from './component/contact';
import Footer from './component/footer';
import Header from './component/header';
import Home from './component/home';
import Information from './component/information';

function App() {

  return (
    <>
     <Header/>
     <Home/>
     <Information/>
     <Calculator/>
     <Contact/>
     <Footer/>
  </>
  )
}

export default App
