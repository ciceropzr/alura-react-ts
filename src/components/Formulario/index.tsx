import React, { useState } from 'react';
import Botao from '../Botao';
import { ITarefa } from '../../types/tarefas';
import style from './style.module.scss'
import { v4 as uuidv4 } from 'uuid'

interface Props{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario({setTarefas}: Props) {
  const [tarefa, setTarefa] = useState('')
  const [tempo, setTempo] = useState('00:00')

  function addTarefa(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    setTarefas(tarefasAntigas=> 
      [
        ...tarefasAntigas, 
        {
          tarefa,
          tempo,
          selecionado: false,
          completado: false,
          id: uuidv4()
        }
      ]
    )
    setTarefa('')
    setTempo('00:00')
  }

  return (
    <form className={style.novaTarefa} onSubmit={addTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Tarefa</label>
        <input
          type="text"
          name='tarefa'
          value={tarefa}
          onChange={ev => setTarefa( ev.target.value)}
          id='tarefa'
          placeholder='O que você quer estudar?'
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step={1}
          name='tempo'
          value={tempo}
          onChange={ev => setTempo(ev.target.value)}
          id='tempo'
          min={'00:00:00'}
          max={'01:30:00'}
          required
        />
      </div>
      <Botao>
        Adicionar
      </Botao>
    </form>
  )
}

export default Formulario
