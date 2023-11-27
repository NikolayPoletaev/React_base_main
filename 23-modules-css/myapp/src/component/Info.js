import './Info.css'
import styles from './Info.module.css'
function Info() {
    return(
        <div className={styles.Info}>
        <h1>Hello from the Info component</h1>
        <button className='my-button'>Click me!</button>
        </div>
    )
}
export default Info