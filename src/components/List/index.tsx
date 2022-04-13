import Item from './Item'
import { ITarefa } from '../../types/tarefas'
import style from './style.module.scss'

const List = ({ tarefas }: { tarefas: ITarefa[] }) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos de dia</h2>
      <ul>
        {tarefas.map((i, index) => (
          <Item
            key={index}
            {...i}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List
