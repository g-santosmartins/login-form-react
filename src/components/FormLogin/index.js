import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'


export default function FormLogin() {

  const [name, setName] = useState('')
  const [nickname, setNickname] = useState('')
  const [cpf, setCpf] = useState('')
  const [promocoes, setPromocoes] = useState('')
  const [novidades, setNovidades] = useState('')


  function handleFormDataGrip(e) {
    e.preventDefault()
    const formData = new FormData(e.target);
    const name = formData.get('name')
    const lastname = formData.get('lastname')
    const cpf = formData.get('cpf')

    const obj = {
      nome: name,
      lastname: lastname,
      cpf: cpf
    }

    console.log(obj)
  }

  function handleChangeText(e, newState) {
      let temporaryName = e.target.value
      if(newState === setCpf) {
        temporaryName = temporaryName.substr(0, 11)
      }

      newState(temporaryName)
    }

  return (
    <form
      onSubmit={(e) => { handleFormDataGrip(e) }}
    >
      <TextField
        value={name}
        onChange={(e) => {
          handleChangeText(e, setName)
        }}
        fullWidth
        label="Nome"
        name="name"
        variant="outlined"
        margin="normal"
      />

      <TextField
        fullWidth
        value={nickname}
        onChange={(e) => { handleChangeText(e, setNickname) }}
        label="Sobrenome"
        name="lastname"
        variant="outlined"
        margin="normal" />

      <TextField
        value={cpf}
        onChange={(e) => { handleChangeText(e, setCpf) }}
        fullWidth
        label="CPF"
        name="cpf"
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
        }
      />


      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="novidades"
            color="primary"
            defaultChecked
          />
        }
      />

      <Button
        variant="contained"
        color="primary"
        type="submit"
      >Cadastrar</Button>

    </form>
  )
}
