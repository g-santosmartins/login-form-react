import './App.css';
import FormLogin from './components/FormLogin';
import { Container, Typography } from '@material-ui/core'

function App() {
  return (


    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
      <FormLogin />

    </Container>

  );
}

export default App;
