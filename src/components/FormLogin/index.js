import React from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'


export default function FormLogin() {
  return (
    <form>
      <TextField
        fullWidth
        label="Nome"
        name="Nome"
        variant="outlined"
        margin="normal"
      />

      <TextField
        fullWidth
        label="Sobrenome"
        name="Sobrenome"
        variant="outlined"
        margin="normal" />

      <TextField
        fullWidth
        label="CPF"
        name="CPF"
        variant="outlined"
        margin="normal"
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            name="promocoes"
            color="primary"
            defaultChecked
          />
        } />


      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="novidades"
            color="primary"
            defaultChecked
          />
        } />

      <Button
        variant="contained"
        color="primary"
        type="submit"
      >Cadastrar</Button>

    </form>
  )
}
