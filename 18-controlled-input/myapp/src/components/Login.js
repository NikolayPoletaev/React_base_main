import { useState } from 'react'
import './module.css'
function Login() {
    const [data, setData] = useState({user:'',password:''})
    function handelFormSubmit(event){
        event.preventDefault()
        console.log(data)
        // alert(JSON.stringify(userData))
    }
    function handelInputChange(e, name) {
        setData({ ...data, [name]: e.target.value })
    }
    return (
        <>
            <h1>Login Form</h1>
            <form onSubmit={handelFormSubmit}>
                <label>
                    Username: 
                    <input 
                    type="text"
                    value={data.user}
                    onChange={(e) => handelInputChange(e, 'user')}
                    />
                </label>
                <label>
                    Password: 
                    <input 
                    type="password"
                    value={data.password}
                    onChange={(e) => handelInputChange(e, 'password')}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login