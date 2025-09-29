import Logo from '../../assets/Logo.svg'
import styles from './header.module.css'

function Header() {

  return (
    <>
      <header className={styles.header}>
        <img src={Logo} alt="" className={styles.logo} />
        <h1 className={styles.name}>MyNotes</h1>
      </header>
    </>
  )
}

export default Header
