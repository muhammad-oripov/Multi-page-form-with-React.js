import React, {createContext, useState} from 'react'

export const AuthContext = createContext({})

const Context = ({children}) => {

  let [name, setName] = useState('')
  let [surename, setSurename] = useState('')
  let [password, setPassword] = useState('')

  return (
    <AuthContext.Provider value={{ name, setName, password, setPassword, surename, setSurename}}>
        {children}
    </AuthContext.Provider>
  )
}

export default Context