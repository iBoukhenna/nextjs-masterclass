import Link from 'next/link'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home({posts, date}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCount(n => n + 1), 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      <Head>
        <title>
          Nextjs Masterclass
        </title>
      </Head>
      <div>
        <h3>Count : {count} - {date} </h3>
        <ul>
          {posts.map((post, k) => <li key={k}>
            <Link href={`/blog/${post.id}`}>
              <a>
                <h3>{post.id} - {post.title}</h3>
              </a>
            </Link>
          </li>)}
        </ul>
      </div>
    </>
  )
}

export async function getStaticProps () {
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=4`)
  .then(r => r.json())
  return {
    props: {
      posts,
      date: (new Date()).toString()
    },
    revalidate: 5,
  }
}
