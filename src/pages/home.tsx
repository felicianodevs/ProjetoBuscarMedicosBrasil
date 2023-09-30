// import { redirect, useNavigate } from 'react-router-dom'

import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  const red = () => {
    return <Navigate to="/login" />
  }
  useEffect(() => {
    red()
  }, [])
  return (
    <>
      <h1>Home</h1>
    </>
  )
}
