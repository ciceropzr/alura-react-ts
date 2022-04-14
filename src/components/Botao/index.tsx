import React from 'react'
import style from './style.module.scss'

interface Props {
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void,
  children?: React.ReactNode
}

function Button({ onClick, type, children }: Props) {
  return (
    <button
      className={style.botao}
      onClick={onClick}
    >
      {children}
    </button>
  )
}


export default Button;
