import logoImg from '../../assets/logo.svg'
import styles from './styles.module.scss'

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img className={styles.logo} src={logoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/saullbrandao.png"
                alt="Saull Brandão"
              />
            </div>
            <span>Saull Brandão</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/saullbrandao.png"
                alt="Saull Brandão"
              />
            </div>
            <span>Saull Brandão</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/saullbrandao.png"
                alt="Saull Brandão"
              />
            </div>
            <span>Saull Brandão</span>
          </div>
        </li>
      </ul>
    </div>
  )
}
