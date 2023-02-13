import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
     <Wrapper color="lightblue"><h2>text inside of the wrapper</h2><button>click me</button></Wrapper>
     <Wrapper color="lightgreen"><h2>someof the wrapper</h2><input type="text" placeholder='value' /></Wrapper>
    </div>
  );
}

export default App;
