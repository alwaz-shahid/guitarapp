import React from 'react'
import posts from '../../../utils/data'

const topicPage = ({ slug, topic, article }) => {
  return (
    <div>topicPage
      <div>
        <h1>
          {article.title}
        </h1>
        <p>
          {article.body}
        </p>

      </div>

    </div>

  )
}

export default topicPage


//get statc props
// content: content.default,
// const content = await import(`../../../content/blog/${topic}/${slug}.md`)
export const getStaticProps = async ({ params }) => {
  const { topic, slug } = params
  const curPost = posts.find(post => post.slug === slug)
  return {
    props: {
      topic,
      slug,
      article: curPost
    }
  }
}

export const getStaticPaths = async () => {
  const paths = posts.map(post => ({
    params: {
      topic: post.category,
      slug: post.slug
    }
  }))
  return {
    paths,
    fallback: false
  }
}