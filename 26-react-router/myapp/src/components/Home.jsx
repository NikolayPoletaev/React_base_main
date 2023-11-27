import styles from './Home.module.css'
import { Link } from 'react-router-dom'
const Home = () => {
    return(
        <div className={styles.Home}>
        <h1>Home</h1>
        <Link to="/"> Go to Home</Link>
        <br/>
        <Link to="contacts">Contacts</Link>
        </div>
    )
} 
export default Home