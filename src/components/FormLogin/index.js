import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'


export default function FormLogin({ submitProp, validateCpfProp }) {

  const [name, setName] = useState('')
  const [nickname, setNickname] = useState('')
  const [cpf, setCpf] = useState('')
  const [sales, setSales] = useState(true)
  const [news, setNews] = useState(false)
  const [erros, setErrors] = useState({
    cpf: {
      valido: true,
      texto: ""
    }
  })


  function handleFormDataGrip(e) {
    e.preventDefault()

    const obj = {
      name: name,
      nickname: nickname,
      cpf: cpf,
      sales: sales,
      news: news,
    }

    submitProp(obj)
  }

  function handleOnChangeText(e, newState) {
    let temporaryName = e.target.value
    newState(temporaryName)
  }

  function handleOnChangeSwitch(e, newState) {
    setSales(e.target.checked)
  }

  function handleOnBlurCPF() {
    const isValid = validateCpfProp(cpf)
    setErrors({ cpf: isValid })

  }


  return (
    <form
      onSubmit={(e) => { handleFormDataGrip(e) }}
    >
      <TextField
        value={name}
        onChange={(e) => {
          handleOnChangeText(e, setName)
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
        onChange={(e) => { handleOnChangeText(e, setNickname) }}
        label="Sobrenome"
        name="lastname"
        variant="outlined"
        margin="normal" />

      <TextField
        value={cpf}
        onBlur={handleOnBlurCPF }
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        onChange={(e) => { handleOnChangeText(e, setCpf) }}
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
            onChange={(e) => { handleOnChangeSwitch(e, setSales) }}

            name="promocoes"
            color="primary"
            defaultChecked={sales}
          />
        }
      />


      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            onChange={(e) => { handleOnChangeSwitch(e, setNews) }}
            name="novidades"
            color="primary"
            defaultChecked={news}
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
