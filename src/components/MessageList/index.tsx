import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import logoImg from '../../assets/logo.svg'
import { api } from '../../services/api'
import styles from './styles.module.scss'

type Message = {
  id: string
  text: string
  user: {
    name: string
    avatar_url: string
  }
}

const messagesQueue: Message[] = []

const socket = io('http://localhost:4000')

socket.on('new_message', (newMessage: Message) => {
  console.log(newMessage)
  messagesQueue.push(newMessage)
})

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages(prevState =>
          [messagesQueue[0], prevState[0], prevState[1]].filter(Boolean),
        )
        messagesQueue.shift()
      }
    }, 3000)
  }, [])

  useEffect(() => {
    api.get<Message[]>('messages/last3').then(res => setMessages(res.data))
  }, [])

  return (
    <div className={styles.messageListWrapper}>
      <img className={styles.logo} src={logoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        {messages.map(({ id, text, user }) => (
          <li className={styles.message} key={id}>
            <p className={styles.messageContent}>{text}</p>
            <div className={styles.messageUser}>
              <div className={styles.userImage}>
                <img src={user.avatar_url} alt={user.name} />
              </div>
              <span>{user.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
