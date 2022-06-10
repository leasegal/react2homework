import logo from './logo.svg';
import './App.css';
import Form from './components/form/Form';
import Print from './components/print/Print';
import { useState } from 'react';




function App() {
  const [user, setUser] = useState({'firstName':"",'lastName':""});
  

  return (
    <>
      <Form user={user} setUser={setUser}/>
    </>
  );
}

export default App;
