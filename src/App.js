import './App.css';
import FormLogin from './components/FormLogin';
import {Container } from '@material-ui/core'

function App() {
  return (
    
    
      <Container component= "article" maxWidth="sm">
      <h1>Formulário de Cadastro</h1>
      <FormLogin />

      </Container>
    
  );
}

export default App;
