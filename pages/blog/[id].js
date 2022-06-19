import Link from 'next/link'

export default function Post ({post}) {
    return <>
        <main>
            <Link href="/">
                <a>Revenir à l'acceuil</a>
            </Link>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </main>
    </>
}

export async function getServerSideProps ({params}) {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    .then(r => r.json())
    return {
      props: {
        post
      }
    }
}
