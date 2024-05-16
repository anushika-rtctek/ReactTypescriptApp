import './App.css';
import { Greet } from './Components/Greet';
import { Heading } from './Components/Heading';
import { NameList } from './Components/NameList';
import { Oscar } from './Components/Oscar';
import { Person } from './Components/Person';
import { Status } from './Components/Status';

function App() {
  const PersonName = {
    first: 'Shruti',
    last: 'Singh'
  }

  const PersonList = [
    {
      first: 'Albus',
      last: 'Dumbledore'
    },
    {
      first: 'Sirius',
      last: 'Black'
    },
    {
      first: 'Hermionie',
      last: 'Granger'
    }
  ]
  return (
    <div className="App">
      <Greet name='Harry' isLoggedIn={true}/>
      <Oscar>
        <Heading>Oscar goes to Leonardo Di Caprio</Heading>
      </Oscar>
      <Heading>Placeholder Text</Heading>
      <Status status='success'/>
      <NameList names={PersonList}/>
      <Person name={PersonName}/>
      <Greet name='Anushika' msgCount={30} isLoggedIn={true}/>
    </div>
  );
}

export default App;
