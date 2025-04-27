import './App.css'
import Contact from './components/Header/contact';
import Menu from './components/Header/Menu'
import Presentation from './components/Presentation';
import Reservez from './components/Reservez';
import Valeurs from './components/Valeurs';

function App() {


  return (
    <>
      <div>
        <Menu />
        <Contact/>
        <Presentation />
        <Valeurs />
        <Reservez />
      </div>
    </>
  )
}

export default App
