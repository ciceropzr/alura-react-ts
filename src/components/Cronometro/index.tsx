
import { useEffect, useState } from "react"
import { tempoParaSegundos } from "../../common/utils/time"
import { ITarefa } from "../../types/tarefas"
import Botao from "../Botao"
import Relogio from "./Relogio"
import style from './style.module.scss'

interface Props {
  selecionado: ITarefa | undefined
  finalizarTarefa(): void
}

const Cronometro = ({selecionado, finalizarTarefa}: Props) => {
  const [tempo, setTempo] = useState<number>()
  
  useEffect(() => {
    if(selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado?.tempo))
    }
  }, [selecionado])

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if(contador > 0) {
        setTempo(contador - 1)
        regressiva(contador - 1)
      } else {
        finalizarTarefa()
      }
    }, 1000)
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie i cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo}/>
      </div>
      <Botao onClick={() => regressiva(tempo)}>
        Comecar
      </Botao>
    </div>
  )
}

export default Cronometro