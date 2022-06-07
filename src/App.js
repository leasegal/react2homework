import logo from './logo.svg';
import './App.css';
import Form from './components/form/Form';
import Print from './components/print/Print';
import { useState } from 'react';




function App() {
  const [user, setUser] = useState({});
  

  return (
    <>
      <Form user={user} setUser={setUser}/>
      {/* <Print user={user}/> */}
    </>
  );
}

export default App;
