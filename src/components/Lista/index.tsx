import Item from './Item'
import { ITarefa } from '../../types/tarefas'
import style from './style.module.scss'

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

const Lista = ({ tarefas, selecionaTarefa }: Props) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos de dia</h2>
      <ul>
        {tarefas.map((i) => (
          <Item
            selecionaTarefa={selecionaTarefa}
            key={i.id}
            {...i}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista
