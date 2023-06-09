import React, {createContext, useState} from 'react'

export const UserContext = createContext()

export const UserProvider = props => {
  const [user, setUser] = useState(false)
  const [bidTask, setbidTask] = useState('free')

  return (
    <UserContext.Provider value={{user, setUser, bidTask, setbidTask}}>
      {props.children}
    </UserContext.Provider>
  )
}
