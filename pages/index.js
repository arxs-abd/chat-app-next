import Sidebar from '@/components/leftSidebar'
import ChatContainer from '@/components/rightSidebar'
import { AuthContext } from '@/context/authContext'
import { Inter } from 'next/font/google'
import { useContext, useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { isLogin } = useContext(AuthContext)
  // useEffect(() => {
  //   alert('use effect')
  // }, [])

  return (
    <main className={`flex gap-4 min-h-screen`}>
      <Sidebar />
      {isLogin && <ChatContainer />}
    </main>
  )
}
