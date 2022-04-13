
import Button from "../Button"
import { Display } from "./Display"
import style from './style.module.scss'


const Timer = () => {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie i cronômetro</p>
      <div className={style.relogioWrapper}>
        <Display/>
      </div>
      <Button>
        Comecar
      </Button>
    </div>
  )
}

export default Timer