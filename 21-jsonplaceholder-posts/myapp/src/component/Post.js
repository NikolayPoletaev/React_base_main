import './Post.css'
function Post(props) {
    console.log(props)
    const { userId,id,title,body } = props
    
    return ( 
    <div className='cart'>
        <h1>{id}</h1>
        <h2>{body}</h2>
        <p>{title}</p>
        <p>User ID:{userId}</p>
    </div>
    )
}

export default Post