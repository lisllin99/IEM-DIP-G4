import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
 
export default function messageChat() {
  const [messages, setMessages] = useState([]);
 
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello are you reaching?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: require('../../assets/images/4.jpeg'),
        },
      },
    ])
  }, [])
 
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
 
  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}