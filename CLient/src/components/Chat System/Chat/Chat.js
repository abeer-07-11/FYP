import React, { useState, useEffect } from "react";
import io from 'socket.io-client'

const socket = io('http://localhost:7000')
const userName = prompt("What is your name: ")

function Chat() {
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState([])

  useEffect(() => {
    socket.on('message', payload => {
      setChat([...chat, payload])
    })
  })

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(message)
    socket.emit('message',{userName,message})
    setMessage('')
  };
  return (
    <div className="ml-64">
      <h1 className="font-black ml-24">Welcome to chat app</h1>
      <form onSubmit={sendMessage}>
        <input type="text" name="message" placeholder='Type message' value={message} onChange={(e)=>{setMessage(e.target.value)}} required className="w-64 h-12 rounded-xl border-2 mt-1"/>
        <button type='submit' class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Send
        </button>
    </form>
      {chat.map((payload, index)=>{
        return(
          <h2 key={index}>{payload.userName}: <span>{payload.message}</span></h2>
        )
      })}
    </div>
  );
}

export default Chat;
