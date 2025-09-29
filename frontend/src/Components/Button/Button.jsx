import styles from './button.module.css'

function Button({color, text, onclick}) {


  return (
    <>
      <button 
        className={styles[color]}
        onClick={onclick}
      >
        {text}
      </button>
    </>
  )
}

export default Button
