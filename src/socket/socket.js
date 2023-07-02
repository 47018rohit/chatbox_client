import { io } from 'socket.io-client'

const url = 'http://localhost:3050'

export const socket = io(url)

