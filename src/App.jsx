import { useEffect, useState } from 'react'
import './App.css'
import { socket } from './socket/socket'

function App() {
  const [sendMessage, setSendMessage] = useState("")
  const [recieveMessage, setRecieveMessage] = useState("")
  const [roomId, setRoomId] = useState('')


  useEffect(() => {
    socket.on("recieve_message", message => {
      setRecieveMessage(message)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket])

  const sendMessageClick = () => {
    socket.emit("send_message",{ room:roomId, message:sendMessage})
  }
  const joinRoom = () => {
    if(roomId !== "")  socket.emit("join_room", roomId)
  }

  return (
    <div>
      <input placeholder='Room ID..' onChange={e => setRoomId(e.target.value)} />
      <button onClick={joinRoom}>Join Room</button>
      <input placeholder='Message...' onChange={e => setSendMessage(e.target.value)} />
      <button onClick={sendMessageClick}>Send Message</button>

      <h3>{recieveMessage}</h3>
    </div>
  )
}

export default App
