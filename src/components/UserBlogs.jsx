import axios from 'axios'
import React, { useEffect } from 'react'

const UserBlogs = () => {
  const id = localStorage.getItem("userId")
const sendRequest = async()=>{
  const res = await axios.get("http://localhost:3001/api/user")
}

  useEffect(() => {

  }, [])

  return (
    <div>UserBlogs</div>
  )
}

export default UserBlogs