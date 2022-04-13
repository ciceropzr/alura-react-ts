import React from 'react';
import Button from '../Button';
import { ITarefa } from '../../types/tarefas';
import style from './style.module.scss'

class Form  extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
  state= {
    tarefa: '',
    tempo: '00:00'
  }

  addTarefa = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    this.props.setTarefas(tarefasAntigas=> [...tarefasAntigas, { ...this.state }])
    this.setState({
      tarefa: '',
      tempo: '00:00'
    })
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.addTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Tarefa</label>
          <input
            type="text"
            name='tarefa'
            value={this.state.tarefa}
            onChange={ev => this.setState({ tarefa: ev.target.value})}
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
            value={this.state.tempo}
            onChange={ev => this.setState({ tempo: ev.target.value })}
            id='tempo'
            min={'00:00:00'}
            max={'01:30:00'}
            required
          />
        </div>
        <Button>
          Adicionar
        </Button>
      </form>
    )
  }
  
}

export default Form;
