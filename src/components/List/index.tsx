import React from 'react'

export const List = () => {
  const tarefas = [
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
  ]

  return (
    <aside>
      <h2>Estudos de dia</h2>
      <ul>
        {tarefas.map(i => (
          <li>
            <h3>{i.tarefa}</h3>
            <span>{i.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
