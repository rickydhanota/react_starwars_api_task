import './App.css';
import Form from './components/Form';
import { Router } from '@reach/router';
import People from './components/People';
import Planets from './components/Planets';

function App() {
  return (
    <div className="App">
      <Form />

      <Router>
        <People path = '/people/:id' />
        <Planets path = '/planets/:id' />
      </Router>
    </div>
  );
}

export default App;
