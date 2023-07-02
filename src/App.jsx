import './App.css'
import { socket } from './socket/socket'

function App() {

  socket.on("connect", () => {
    // console.log(socket.id)
  })

  socket.on("chat_message", ()=>{
    socket.emit("hello from client")
  })

  socket.on("disconnect" , (socket)=>{
    console.log(socket.id)
  })

  return (
    <>
      hello world
    </>
  )
}

export default App
