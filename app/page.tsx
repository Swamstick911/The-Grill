'use client'
import { supabase } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [messages, setMessages] = useState<any[]>([])
  const [newMessage, setNewMessage] = useState('') // Tracks what you type

  // Function to get messages (reused)
  const getMessages = async () => {
    const { data } = await supabase.from('messages').select('id, content')
    if (data) {
      console.log("Data from Supabase:", data)
      setMessages(data)
    }
  }

  useEffect(() => {
    getMessages()
  }, [])

  // Function to send message
  const sendMessage = async () => {
    if (!newMessage) return // Don't send empty messages

    const { error } = await supabase
      .from('messages')
      .insert({ content: newMessage })

    if (error) {
      console.error('Error inserting:', error)
    } else {
      setNewMessage('') // Clear input box
      getMessages() // Refresh list immediately
    }
  }

  return (
    <div className="p-10 font-sans max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Debate App</h1>

      {/* Message List */}
      <div className="mb-6 p-4 border rounded bg-gray-50 h-64 overflow-y-auto">
        {messages.length === 0 ? (
          <p className="text-gray-400">No messages yet...</p>
        ) : (
          messages.map((msg, index) => (
            <div key={msg.id || index} className="p-2 mb-2 bg-white border rounded shadow-sm">
              {msg.content}
            </div>
          ))
        )}
      </div>

      {/* Input Area */}
      <div className="flex gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type something..."
          className="border border-gray-300 p-2 flex-grow rounded text-black"
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()} // Send when hitting Enter
        />
        <button
          onClick={sendMessage}
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Send
        </button>
      </div>
    </div>
  )
}