import './App.css'
import { Greet } from './components/Greet'
import Person from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'

function App() {

  const personName = {
    first: 'Chirantan',
    last: 'Das'
  }

  const nameList = [
    {
      first: 'Chirantan',
      last: 'Das'
    },
    {
      first: 'John',
      last: 'Doe'
    },
    {
      first: 'Jane',
      last: 'Doe'
    }
  ]

  return (
    <>
      {/* <Greet name='Chirantan' messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={ nameList} /> */}

      <Status status='loading' />  
    </>
  )
}

export default App
