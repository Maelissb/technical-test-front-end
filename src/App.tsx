import './App.css'
import Header from './components/Header/contact';
import Menu from './components/Header/Menu'
import Presentation from './components/Presentation';
import Valeurs from './components/Valeurs';

function App() {


  return (
    <>
      <div>
        <Menu />
        <Header />
        <Presentation />
        <Valeurs />
      </div>
    </>
  )
}

export default App
