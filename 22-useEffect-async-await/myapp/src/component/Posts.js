import { useState, useEffect } from 'react'
import Post from './Post'
import './Post.css'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

function Posts() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(async () => {
        try{
        const res = await fetch(API_URL)
        const posts = await res.json()
        setPosts(posts)
    }catch(error){
    setError(error.massage)
    }
    setIsLoading(false)
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
            posts.map((post) => <Post key={post.id} {...post}/>)
        )}
        </div>
    )
}

export default Posts