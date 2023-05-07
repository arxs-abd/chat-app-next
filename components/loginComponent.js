import { AuthContext } from '@/context/authContext'
import { fetchJSON } from '@/helper/utility'
import { useContext, useEffect, useState } from 'react'

const LoginComponents = () => {
  const { userData, isLogin, login, logout } = useContext(AuthContext)
  const [username, setUsername] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    const username = prompt('Masukkan Username')
    const password = prompt('Masukkan Password')

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }
    const result = await fetchJSON('/api/login', options)
    if (!result) return
    alert(`Login dengan username ${result.data.username} Berhasil`)
    login(result.data)
    // data = result.data
    // data.accessToken = result.accessToken
    // setFromLocalStorage('user-data', data)
    // login.innerText = result.data.username
    // getAllConversation()
  }
  useEffect(() => {
    // console.log(userData)
    const username = userData?.username
  }, [])

  return (
    <div className='w-full flex flex-col gap-2'>
      <button className='py-2 text-2xl' onClick={handleLogin}>
        {isLogin ? username : 'Login'}
      </button>
      <button className='py-1'>Find User</button>
    </div>
  )
}

export default LoginComponents
