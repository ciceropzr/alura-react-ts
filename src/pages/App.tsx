import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer'
import style from './style.module.scss'

function App() {
  const [tarefas, setTarefas] = useState([
    {
      tarefa: 'Javascript',
      tempo: '01:00:00'
    },
    {
      tarefa: 'React',
      tempo: '02:00:00'
    },
    {
      tarefa: 'Typescript',
      tempo: '03:00:00'
    }
  ])

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <List tarefas={tarefas}/>
      <Timer/>
    </div>
  );
}

export default App;
