import './App.css';
import { Greet } from './Components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name='Anushika' msgCount={30} isLoggedIn={true}/>
    </div>
  );
}

export default App;
