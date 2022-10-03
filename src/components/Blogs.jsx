import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Blog from './Blog'



const Blogs = () => {
  const sendRequest = async () => {
    const res = await axios.get("http://localhost:3001/api/blog/")
      .catch(err => console.log(err))
    const data = res.data;
    console.log(data)
    return data;
  }

  const [blogs, setBlogs] = useState()
  useEffect(() => {
    sendRequest().then(data => setBlogs(data.blogs))

  }, [])

  return (
    <div>
      {blogs && blogs.map((blog, index) => (
        <Blog
        key={index}
          title={blog.title}
          description={blog.description}
          imageURL={blog.imageUrl}
          userName={blog.user.name}
        />
      )
      )}
    </div>
  )
}

export default Blogs