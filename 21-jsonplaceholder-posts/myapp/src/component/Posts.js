import { useState, useEffect } from 'react'
import Post from './Post'
import './Post.css'

const API_URL = 'https://dummyjson.com/products'

function Posts() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch(API_URL)
        .then((res) =>res.json())
        .then((posts) => setPosts(posts))
        .catch((error) => setError(error.massage))
        .finally(() => setIsLoading(false))
}, [])
if (error) {
    return <h1>Error: {error}</h1>
}
    return (
        <div className='posts'>
        <h1>Posts</h1>
        <hr />
        {isLoading ? (
            <h1>Loading...</h1>
        ) : (
            posts.products.map((post) => <Post key={post.id} {...post}/>)
        )}
        </div>
    )
}

export default Posts