import './App.css';
import Header from './components/header';
import Lateral from './components/lateral/lateral';
import Body from './components/body/body';

function App() {
  return (
    <div className="App">

      <div className='general'>
        <div className='lateralEsquerda'>
          <Lateral/>
        </div>
        <div className='lateralDireita'>
          <Header/>
          <Body/>
        </div>

        <p>
          Oi Will, vou te falar que o Bruno é legal!!
        </p>

      </div>
    </div>

  );
}

export default App;
