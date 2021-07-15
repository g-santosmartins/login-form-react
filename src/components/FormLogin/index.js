import React from 'react';
import { Button } from '@material-ui/core'


export default function FormLogin() {
  return (
    <form>
      <label>Nome</label>
      <input type="text" placeholder="Digite seu nome" />

      <label>Sobrenome</label>
      <input type="text" placeholder="Digite seu sobrenome" />

      <label>CPF</label>
      <input type="text" placeholder="Digite seu CPF" />

      <label>Promoções</label>
      <input type="checkbox" />

      <label>Novidades</label>
      <input type="checkbox" />

      <Button
        variant="contained"
        color="primary"
        type="submit"
      >Cadastrar</Button>

    </form>
  )
}
