import Link from 'next/link'
import React from 'react'
import posts from '../../utils/data'

const blogs = () => {
  return (
    <div>blogs
    {
      posts.map((post, i) => {
        const {category,slug}=post
        return(<div key={i} className="p-5 hover:bg-slate-400">
          <Link href={`/blog/${category}/${slug}`} >
            <a>{post.title}</a>
          </Link>
        </div>)
    })
    }
    </div>
  )
}

export default blogs