import { AuthContext } from './authContext'
import { useState, useEffect } from 'react'

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const userDataFromS = localStorage.getItem('user-data')
    if (userDataFromS) {
      setIsLogin(true)
      console.log(isLogin)
      setUserData(JSON.parse(userDataFromS))
      console.log(userData)
    }
  }, [])

  const login = (datax) => {
    setIsLogin(true)
    localStorage.setItem('user-data', JSON.stringify(datax))
  }

  const logout = () => {
    localStorage.removeItem('user-data')
    setIsLogin(false)
  }

  return (
    <AuthContext.Provider value={{ isLogin, login, logout, userData }}>
      {children}
    </AuthContext.Provider>
  )
}
