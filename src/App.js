import './App.css';
import Header from './components/header/header';
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
            <div><Header/></div>
            
            <div><Body/></div>
                   
        </div>
       </div>
    </div>

  );
}

export default App;
